'use client';

import { useState, type ReactNode } from 'react';

export type AboutSection = {
  id: string;
  label: string;
  content: ReactNode;
};

export default function AboutSidebarNav({ sections }: { sections: AboutSection[] }) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
      <nav className="space-y-1 lg:border-r lg:border-gray-200 lg:pr-4">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActiveId(section.id)}
            className={`block w-full rounded-md px-3 py-2 text-left text-sm ${
              activeId === section.id
                ? 'bg-brand-green/10 font-semibold text-brand-green'
                : 'text-gray-600 hover:text-brand-green'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <div>{activeSection.content}</div>
    </div>
  );
}
