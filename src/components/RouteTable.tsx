export interface RouteDay {
  day?: number;
  date?: string;
  from?: string;
  to: string;
  miles?: string;
  climbUp?: string;
  climbDown?: string;
  notes?: string;
  type?: 'normal' | 'ferry' | 'total';
}

interface RouteTableProps {
  rows: RouteDay[];
}

export default function RouteTable({ rows }: RouteTableProps) {
  return (
    <div className="not-prose my-4">
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap">Day</th>
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">From</th>
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">To</th>
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap">Miles</th>
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap">Climbing</th>
              <th className="text-left px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              if (row.type === 'ferry') {
                return (
                  <tr key={i} className="border-b border-gray-100 bg-blue-50/50">
                    <td className="px-2 py-2" colSpan={2}></td>
                    <td className="px-2 py-2 font-semibold text-blue-700">{row.to}</td>
                    <td></td>
                    <td></td>
                    <td className="px-2 py-2 text-gray-500 text-sm">{row.notes}</td>
                  </tr>
                );
              }
              if (row.type === 'total') {
                return (
                  <tr key={i} className="border-t-2 border-gray-300">
                    <td className="px-2 py-2" colSpan={2}></td>
                    <td className="px-2 py-2 font-bold text-gray-800">Totals</td>
                    <td className="px-2 py-2 font-bold text-gray-800 whitespace-nowrap">{row.miles}</td>
                    <td className="px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                      <span className="elev-up">↑</span> {row.climbUp}<br/>
                      <span className="elev-down">↓</span> {row.climbDown}
                    </td>
                    <td></td>
                  </tr>
                );
              }
              return (
                <tr key={i} className="border-b border-gray-100">
                  <td className="px-2 py-2 whitespace-nowrap align-top">
                    <span className="day-badge">{row.day}</span>
                    <br/>
                    <span className="text-xs text-gray-400 mt-0.5 block">{row.date}</span>
                  </td>
                  <td className="px-2 py-2 text-gray-700 align-top">{row.from}</td>
                  <td className="px-2 py-2 text-gray-700 align-top">{row.to}</td>
                  <td className="px-2 py-2 whitespace-nowrap align-top text-gray-700">{row.miles}</td>
                  <td className="px-2 py-2 whitespace-nowrap align-top">
                    <span className="elev-up">↑</span> {row.climbUp}<br/>
                    <span className="elev-down">↓</span> {row.climbDown}
                  </td>
                  <td className="px-2 py-2 text-gray-500 text-sm align-top">{row.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2">
        {rows.map((row, i) => {
          if (row.type === 'ferry') {
            return (
              <div key={i} className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-2.5 text-sm">
                <span className="font-semibold text-blue-700">{row.to}</span>
                {row.notes && <span className="text-blue-600"> — {row.notes}</span>}
              </div>
            );
          }
          if (row.type === 'total') {
            return (
              <div key={i} className="rounded-lg bg-gray-50 border-2 border-gray-200 px-3 py-2.5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-gray-700">
                <span>Total: {row.miles} mi</span>
                <span><span className="elev-up">↑</span> {row.climbUp}</span>
                <span><span className="elev-down">↓</span> {row.climbDown}</span>
              </div>
            );
          }
          return (
            <div key={i} className="rounded-lg border border-gray-200 px-3 py-3 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="day-badge">{row.day}</span>
                <span className="text-xs text-gray-400 font-medium">{row.date}</span>
              </div>
              <div className="text-sm font-medium text-gray-800 leading-snug">
                {row.from} → {row.to}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500">
                <span>{row.miles} mi</span>
                <span><span className="elev-up">↑</span> {row.climbUp}</span>
                <span><span className="elev-down">↓</span> {row.climbDown}</span>
              </div>
              {row.notes && (
                <div className="text-xs text-gray-400 leading-snug">{row.notes}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
