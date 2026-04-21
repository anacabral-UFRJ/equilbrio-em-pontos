"use client";

import { useState } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const mockResponses: Record<string, string> = {
  ansiedade:
    "A ansiedade na Medicina Tradicional Chinesa está frequentemente associada ao Fígado, responsável pelo fluxo suave do Qi. Quando há estagnação, podem surgir preocupações, inquietação e tensão. Gostaria de explorar técnicas para suavizar esse fluxo?",
  estresse:
    "O estresse crônico afeta especialmente o Coração e o Baço na perspectiva TCM. O Coração abriga a mente (Shen), e quando perturbado, pode causar insônia e inquietação mental. Posso sugerir algumas práticas para acalmar a mente?",
  medo:
    "O medo está relacionado ao Rim na Medicina Tradicional Chinesa. Quando a energia do Rim está enfraquecida, podemos sentir insegurança e ansiedade sem causa aparente. Há práticas que podem ajudar a fortalecer essa energia.",
  raiva:
    "A raiva está associada ao Fígado. Quando acumulada, causa irritabilidade, frustração e pode levar a dores de cabeça e tensão no pescoço. Que tal praticarmos uma técnica de libertação emocional?",
  default:
    "Entendo que você está passando por um momento difícil. Na Medicina Tradicional Chinesa, cada emoção está ligada a um órgão específico. Pode me contar mais sobre o que está sentindo? Estou aqui para ajudar com técnicas de autocuidadobaseadas na TCM.",
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou seu assistente de autocuidado. Como você está se sentindo agora? Pode me contar sobre suas emoções ou preocupações.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    for (const [key, response] of Object.entries(mockResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    return mockResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-green-50 rounded-3xl mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.isUser
                  ? "bg-primary text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm shadow-md"
              }`}
            >
              <p className="text-sm sm:text-base">{message.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-md">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Compartilhe como você está se sentindo..."
          className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {["Ansiedade", "Estresse", "Medo", "Raiva"].map((emotion) => (
          <button
            key={emotion}
            onClick={() => {
              setInput(emotion);
            }}
            className="px-3 py-1 bg-white border-2 border-secondary text-secondary rounded-xl text-sm hover:bg-secondary hover:text-white transition-colors"
          >
            {emotion}
          </button>
        ))}
      </div>
    </div>
  );
}