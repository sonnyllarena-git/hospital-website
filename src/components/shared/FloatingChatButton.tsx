'use client';

import { useState } from 'react';
import Image from 'next/image';
import ChatWidget from './ChatWidget';

// The launcher icon stays in place whether the chat is open or closed — the chat box (with its
// own close button) opens above it, rather than the icon itself flipping to an X.
export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="flex flex-col items-center gap-1"
      >
        <span className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.45)] ring-4 ring-brand-green">
          <Image
            src="/images/chat logo.png"
            alt="Chat with Tanauan Medical Center"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </span>
        <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white shadow">
          Chat with us
        </span>
      </button>
    </div>
  );
}
