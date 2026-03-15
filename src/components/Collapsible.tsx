import type { ReactNode } from 'react';

interface CollapsibleProps {
  summary: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({ summary, children, defaultOpen = true }: CollapsibleProps) {
  return (
    <details className="collapsible-section not-prose" open={defaultOpen || undefined}>
      <summary>
        <span className="text-sm">{summary}</span>
        <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </summary>
      <div className="collapsible-body prose prose-sm max-w-none">
        {children}
      </div>
    </details>
  );
}
