// pages/api/local-chat.ts
type NextApiRequest = any;
type NextApiResponse = any;

type MenuItem = { id: string; name: string; description?: string; price?: number; restaurantId: string };
type Restaurant = { id: string; name: string; cuisine?: string; city?: string };
const restaurants: Restaurant[] = [
  { id: "r1", name: "Spice Junction", cuisine: "Indian", city: "Hyderabad" },
  { id: "r2", name: "Noodle House", cuisine: "Chinese", city: "Hyderabad" },
  { id: "r3", name: "Green Bowl", cuisine: "Healthy", city: "Vijayawada" }
];
const menu: MenuItem[] = [
  { id: "m1", name: "Butter Chicken", description: "Creamy tomato chicken", price: 320, restaurantId: "r1" },
  { id: "m2", name: "Paneer Tikka", description: "Grilled cottage cheese", price: 220, restaurantId: "r1" },
  { id: "m3", name: "Schezuan Noodles", description: "Spicy veg noodles", price: 180, restaurantId: "r2" },
  { id: "m4", name: "Chicken Momos", description: "Steamed dumplings", price: 150, restaurantId: "r2" },
  { id: "m5", name: "Quinoa Salad", description: "Mixed greens and quinoa", price: 240, restaurantId: "r3" }
];

function scoreText(target: string, query: string) {
  const t = target.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  if (t === q) return 100;
  let score = 0;
  if (t.includes(q)) score += 50;
  const parts = q.split(/\s+/);
  for (const p of parts) if (t.includes(p)) score += 10;
  const lev = levenshteinDistance(t, q);
  const norm = Math.max(0, 30 - lev);
  score += norm;
  return score;
}

function levenshteinDistance(a: string, b: string) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp: number[] = Array(n + 1).fill(0).map((_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = temp;
    }
  }
  return dp[n];
}

function searchMenu(query: string) {
  const scores = menu.map((item) => {
    const sName = scoreText(item.name, query);
    const sDesc = scoreText(item.description || "", query);
    const sRest = scoreText(restaurants.find(r => r.id === item.restaurantId)?.name || "", query);
    const total = sName * 2 + sDesc + sRest;
    return { item, score: total };
  });
  return scores.filter(s => s.score > 10).sort((a,b)=>b.score-a.score).slice(0,10).map(s=>s.item);
}

function searchRestaurants(query: string) {
  const scores = restaurants.map(r => ({ r, score: scoreText(r.name + " " + (r.cuisine||""), query) }));
  return scores.filter(s => s.score > 10).sort((a,b)=>b.score-a.score).slice(0,10).map(s=>s.r);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const body = req.body || {};
  const messages = Array.isArray(body.messages) ? body.messages : [{ role: "user", content: String(body.text || "") }];
  const last = messages[messages.length - 1];
  const text = String(last.content || "").trim();
  const lower = text.toLowerCase();
  if (!text) return res.status(400).json({ error: "empty message" });
  if (/search|find|show|list|menu|where|which|do you have/.test(lower)) {
    const items = searchMenu(text);
    const rests = searchRestaurants(text);
    if (items.length) {
      const results = items.map(i => {
        const r = restaurants.find(rr => rr.id === i.restaurantId);
        return { name: i.name, restaurant: r?.name, price: i.price, description: i.description };
      });
      return res.status(200).json({ type: "menuResults", results });
    }
    if (rests.length) {
      return res.status(200).json({ type: "restaurantResults", results: rests });
    }
    return res.status(200).json({ type: "none", text: "No matches found. Try different keywords." });
  }
  if (/price|cost|how much/.test(lower)) {
    const items = searchMenu(text);
    if (items.length) return res.status(200).json({ type: "price", text: `${items[0].name} costs ₹${items[0].price}` });
    return res.status(200).json({ type: "price", text: "Item not found." });
  }
  if (/recommend|suggest|popular|best/.test(lower)) {
    const top = menu.slice(0,5).map(i=>({ name: i.name, restaurant: restaurants.find(r=>r.id===i.restaurantId)?.name }));
    return res.status(200).json({ type: "recommend", results: top });
  }
  return res.status(200).json({ type: "help", text: "I can search menu items and restaurants. Try: 'find paneer', 'show schezuan', 'price of butter chicken'." });
}
