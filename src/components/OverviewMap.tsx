interface OverviewMapProps {
  title: string;
  stops: string[];
  mapsUrl: string;
}

const ChevronIcon = () => (
  <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function OverviewMap({ title, stops, mapsUrl }: OverviewMapProps) {
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const origin = encodeURIComponent(stops[0]);
  const destination = encodeURIComponent(stops[stops.length - 1]);
  const waypoints = stops.slice(1, -1).map(s => encodeURIComponent(s)).join('|');
  const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}&destination=${destination}${waypoints ? `&waypoints=${waypoints}` : ''}&mode=bicycling`;

  return (
    <details className="not-prose collapsible-section my-4">
      <summary>
        <span className="text-sm">{title}</span>
        <ChevronIcon />
      </summary>
      <div>
        <iframe
          src={embedUrl}
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
          >
            Open in Google Maps
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </details>
  );
}
