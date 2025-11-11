import React, { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error("Chat API error");

      const data = await res.json();
      const assistantText = data?.text ?? "Sorry, I couldn't get a reply.";

      setMessages((m) => [...m, { role: "assistant", content: assistantText }]);
    } catch (err) {
      setMessages((m) => [...m, { role: "assistant", content: "Error: could not reach chat service." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Chat with FoodExpress</h3>

      <div className="space-y-3 max-h-96 overflow-y-auto mb-4">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground">Ask me about restaurants, menu items, or ordering.</div>
        )}

        {messages.map((m, idx) => (
          <div key={idx} className={`p-3 rounded ${m.role === "user" ? "bg-muted text-foreground ml-auto max-w-[80%]" : "bg-secondary text-foreground max-w-[80%]"}`}>
            <div className="text-sm whitespace-pre-wrap">{m.content}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={2}
          className="flex-1 resize-none p-2 border border-border rounded"
          placeholder="Type your question and press Enter to send"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="px-4 py-2 rounded bg-primary text-primary-foreground disabled:opacity-60"
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
