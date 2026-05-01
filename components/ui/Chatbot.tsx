'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { ChatMessage, ChatStatus } from '@/types';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init',
  role: 'assistant',
  content: "Hi there! 👋 I'm Sitecraf's AI assistant. How can I help you today?",
  timestamp: new Date(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setStatus('loading');

    try {
      const url = '/api/chatbot';

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error('Chat API error');

      const data = await res.json();
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.answer,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Sorry, something went wrong. Reach us on WhatsApp at +91 9599143235! 💬',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
      setStatus('idle');
      inputRef.current?.focus();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        suppressHydrationWarning
        className={`fixed bottom-6 right-6 z-50 bg-[#111111] border border-dashed border-[#b5ff3e] p-1.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        {/* Avatar Icon */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 relative text-[#e8e8f0]">
          <Image 
            src="/chatbot-avatar.webp" 
            alt="Chatbot Avatar" 
            fill 
            sizes="48px"
            className="object-cover"
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
              <div className="w-8 h-8 rounded-full overflow-hidden relative flex items-center justify-center bg-[#1a1a1a]">
                <Image 
                  src="/chatbot-avatar.webp" 
                  alt="Chatbot Avatar" 
                  fill 
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[#e8e8f0] text-sm font-semibold">Sitecraf Assistant</h3>
                <p className="text-[#22c55e] text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} suppressHydrationWarning className="text-[#8888a0] hover:text-[#e8e8f0] transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] flex flex-col gap-4 bg-[#000000]">
            {messages.map((msg, index) => (
              <div key={msg.id} className={`flex w-full ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'assistant'
                    ? 'bg-[#181818] text-[#e8e8f0] border border-white/[0.05] rounded-tl-sm'
                    : 'bg-[#b5ff3e] text-[#000000] rounded-tr-sm font-medium'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  {index === 0 && msg.role === 'assistant' && (
                    <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 bg-[#25D366]/[0.1] border border-[#25D366]/[0.2] text-[#25D366] px-4 py-2 rounded-lg font-medium hover:bg-[#25D366]/[0.15] transition-colors w-full">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {status === 'loading' && (
              <div className="flex justify-start">
                <div className="bg-[#181818] border border-white/[0.05] rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#8888a0] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#0a0a0a] border-t border-white/[0.08] px-3 py-2">
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/[0.1] border border-[#25D366]/[0.2] text-[#25D366] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#25D366]/[0.15] transition-colors w-full"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-[#0a0a0a] border-t border-white/[0.08] flex items-center gap-2">
            <input
              type="text"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              suppressHydrationWarning
              disabled={status !== 'idle'}
              className="flex-1 bg-[#111111] border border-white/[0.08] rounded-full px-4 py-2 text-[#e8e8f0] text-sm focus:border-[#b5ff3e]/40 focus:outline-none transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              suppressHydrationWarning
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
