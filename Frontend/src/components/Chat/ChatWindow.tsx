import { useEffect, useRef, useState } from "react";
import ChatInput from "./MessageInput";

type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "ai",
      text: "Hello 👋 I’m your AI Assistant. Ask me anything.",
    },
  ]);

  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setThinking(true);

    // 🔹 Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "ai",
        text: `You said: "${userMessage.text}"`,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setThinking(false);
    }, 1200);
  };
return (
  <div className="flex flex-col h-full">

    {/* Messages */}
    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "gap-4"
          }`}
        >
          {msg.role === "ai" && (
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
              AI
            </div>
          )}

          <div
            className={`max-w-2xl px-6 py-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-blue-600 text-white"
                : "bg-white border text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {thinking && (
        <div className="flex gap-4 text-gray-500 text-sm italic">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
            AI
          </div>
          Thinking...
        </div>
      )}

      <div ref={bottomRef} />
    </div>

    {/* Input */}
    <div className="bg-white border-t p-4">
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
      />
    </div>

  </div>
);
}
