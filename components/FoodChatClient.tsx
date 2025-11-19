import React, { useState } from "react";
type Msg = { role: "user" | "assistant" | "system", content: string };
type Resp = { source: string; text?: string; results?: any[]; error?: string; raw?: any };
const FoodChatClient: React.FC = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const send = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: "user" as const, content: input }];
    setMessages(newMsgs);
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs })
      });
      const data: Resp = await res.json();
      if (data.error) setError(data.error);
      let msg = "";
      if (data.source === "palm") msg = data.text || "";
      else if (data.source === "local") msg = data.text || (data.results ? data.results.map(r => r.item ? `${r.item} (${r.restaurant}) ₹${r.price}` : JSON.stringify(r)).join(", ") : "");
      setMessages([...newMsgs, { role: "assistant" as const, content: msg }]);
    } catch (e: any) {
      setMessages([...newMsgs, { role: "assistant" as const, content: "Error: " + (e.message || "Unknown error") }]);
    } finally {
      setLoading(false);
    }
  };
  const exampleQuestions = [
    "Show me menu items",
    "Find paneer dishes",
    "Price of butter chicken",
    "Recommend popular items",
    "Which restaurant has biryani?"
  ];
  return (
    <div style={{ maxWidth: 500, margin: "40px auto", border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Try a question:</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {exampleQuestions.map((q, i) => (
            <button key={i} style={{ padding: "6px 12px", borderRadius: 4, border: "1px solid #ccc", background: "#fafafa", cursor: "pointer" }} onClick={() => { setInput(q); send(); }}>{q}</button>
          ))}
        </div>
      </div>
      <div style={{ minHeight: 200 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left", margin: "8px 0" }}>
            <span style={{ display: "inline-block", background: m.role === "user" ? "#e0f7fa" : "#f1f8e9", padding: "8px 12px", borderRadius: 6 }}>{m.content}</span>
          </div>
        ))}
        {loading && <div style={{ textAlign: "center", color: "#888" }}>...</div>}
        {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <input value={input} onChange={e => setInput(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }} placeholder="Type your question..." onKeyDown={e => { if (e.key === "Enter") send(); }} />
        <button onClick={send} disabled={loading} style={{ padding: "8px 16px", borderRadius: 4, background: "#1976d2", color: "#fff", border: "none" }}>Send</button>
      </div>
    </div>
  );
};
export default FoodChatClient;
