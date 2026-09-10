'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { GREETING, DISCLAIMER, AGREE_LABEL, SUGGESTED_QUESTIONS } from '@/lib/chatKnowledgeBase';
import { getBotReply } from '@/lib/chatMatcher';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  time: string;
  showAgree?: boolean;
  showSuggestions?: boolean;
  cta?: { label: string; href: string };
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return idCounter;
}

function now() {
  return new Date().toLocaleString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: nextId(), role: 'bot', text: GREETING, time: now() },
    { id: nextId(), role: 'bot', text: DISCLAIMER, time: now(), showAgree: true },
  ]);
  const [agreed, setAgreed] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  function appendMessage(msg: Omit<Message, 'id' | 'time'>) {
    setMessages((prev) => [...prev, { ...msg, id: nextId(), time: now() }]);
  }

  function handleAgree() {
    setAgreed(true);
    appendMessage({
      role: 'bot',
      text: 'How can I help you today? You can type a question, or pick one below.',
      showSuggestions: true,
    });
  }

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;
    appendMessage({ role: 'user', text: trimmed });
    const reply = getBotReply(trimmed);
    appendMessage({
      role: 'bot',
      text: reply.text,
      cta:
        reply.ctaLabel && reply.ctaHref
          ? { label: reply.ctaLabel, href: reply.ctaHref }
          : undefined,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    ask(input);
    setInput('');
  }

  return (
    <div className="flex h-[28rem] w-80 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-brand-green px-4 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/chat logo.png"
            alt="Tanauan Medical Center"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-sm font-semibold text-white">Tanauan Medical Center Assistant</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat" className="text-white">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-3 py-3">
        {messages.map((message) => (
          <div key={message.id} className={message.role === 'user' ? 'text-right' : 'text-left'}>
            <div
              className={`inline-block max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                message.role === 'user'
                  ? 'bg-brand-green text-white'
                  : 'border border-gray-200 bg-white text-gray-800'
              }`}
            >
              {message.text}
            </div>
            <p className="mt-0.5 text-[10px] text-gray-400">{message.time}</p>

            {message.showAgree && !agreed && (
              <button
                type="button"
                onClick={handleAgree}
                className="mt-2 block w-full rounded-md border border-brand-green px-3 py-2 text-sm font-semibold text-brand-green hover:bg-brand-green/10"
              >
                {AGREE_LABEL}
              </button>
            )}

            {message.showSuggestions && (
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => ask(q)}
                    className="rounded-full border border-brand-green px-3 py-1 text-xs font-medium text-brand-green hover:bg-brand-green/10"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {message.cta && (
              <Link
                href={message.cta.href}
                className="mt-2 inline-block text-sm font-medium text-brand-green underline hover:text-brand-green/80"
              >
                {message.cta.label} →
              </Link>
            )}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-gray-200 p-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!agreed}
          placeholder={agreed ? 'Type a message..' : 'Please accept the note above first'}
          className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={!agreed}
          aria-label="Send message"
          className="rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
