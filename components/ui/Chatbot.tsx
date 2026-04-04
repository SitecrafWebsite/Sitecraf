'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 How can we help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: inputValue, isBot: false }]);
    setInputValue('');
    
    // Simulate bot typing
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: "Thanks for reaching out! A member of our team will get back to you shortly.", isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-[#111111] border border-white/[0.08] p-1.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        {/* Avatar Icon */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 relative">
          <Image 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=1a1a1a" 
            alt="Support Agent" 
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Up Chevron Icon */}
        <div className="w-12 h-12 rounded-full bg-[#b5ff3e] flex items-center justify-center text-[#000000] flex-shrink-0">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-[#111111] border border-dotted border-white/[0.2] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#0a0a0a] border-b border-white/[0.08] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#b5ff3e]/[0.1] rounded-full flex items-center justify-center text-[#b5ff3e]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8"></path>
                  <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[#e8e8f0] text-sm font-semibold">NexForge Assistant</h3>
                <p className="text-[#22c55e] text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#8888a0] hover:text-[#e8e8f0] transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] flex flex-col gap-4 bg-[#000000]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.isBot 
                    ? 'bg-[#181818] text-[#e8e8f0] border border-white/[0.05] rounded-tl-sm' 
                    : 'bg-[#b5ff3e] text-[#000000] rounded-tr-sm font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-[#0a0a0a] border-t border-white/[0.08] flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#111111] border border-white/[0.08] rounded-full px-4 py-2 text-[#e8e8f0] text-sm focus:border-[#b5ff3e]/40 focus:outline-none transition-colors"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-[#b5ff3e] text-[#000000] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00e5e5] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
