import type { ReactNode } from 'react';

interface CollapsibleProps {
  summary: string;
  children: ReactNode;
  defaultOpen?: boolean;
  images?: string[];
}

export default function Collapsible({ summary, children, defaultOpen = false, images }: CollapsibleProps) {
  return (
    <details className="collapsible-section not-prose" open={defaultOpen || undefined}>
      <summary>
        <span className="text-sm">{summary}</span>
        <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </summary>
      {images && images.length > 0 && (
        <div className="flex gap-1 overflow-x-auto p-1 bg-gray-50 scrollbar-hide">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${summary} — photo ${i + 1}`}
              className="hotel-photo h-36 w-56 object-cover flex-shrink-0 cursor-pointer rounded-sm first:rounded-l last:rounded-r"
            />
          ))}
        </div>
      )}
      <div className="collapsible-body prose prose-sm max-w-none">
        {children}
      </div>
    </details>
  );
}
