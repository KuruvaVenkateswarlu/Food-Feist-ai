import type { IncomingMessage, ServerResponse } from "http";

// Simple Vercel / Netlify-compatible serverless function that proxies to OpenAI.
// Requires OPENAI_API_KEY to be set in the deployment environment.

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const { messages } = req.body || {};

    // Build a content string or forward messages to OpenAI Chat API
    const systemPrompt = { role: "system", content: "You are FoodExpress assistant. Help users find restaurants and menu items and answer questions concisely." };

    const conversation = [systemPrompt];
    if (Array.isArray(messages)) {
      for (const m of messages) {
        conversation.push({ role: m.role, content: m.content });
      }
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Server: OPENAI_API_KEY is not set in environment." }));
      return;
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ model: "gpt-3.5-turbo", messages: conversation, max_tokens: 500 }),
    });

    if (!r.ok) {
      const text = await r.text();
      res.statusCode = r.status;
      res.end(JSON.stringify({ error: text }));
      return;
    }

    const data = await r.json();
    const assistantText = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "";

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ text: assistantText }));
  } catch (err: any) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || String(err) }));
  }
}
