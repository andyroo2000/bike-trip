# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

### Added
- Touch swipe gesture support in lightbox for mobile photo navigation (swipe left/right)
- Lightbox overlay for hotel photos — click any banner image to view full-screen; close with Escape, × button, or clicking outside
- Hotel photos on lodging page fetched via Google Places API, stored locally, displayed as banner image in each collapsible card
- `scripts/fetch-hotel-images.mjs` one-time fetch script for hotel photos

### Changed
- Planning page: closed route and lodging open questions; removed resolved items; only rinko bag remains open

### Removed
- Summary table and confirmation details from top of flights page

### Added
- `RouteTable` component with desktop table view and mobile card-per-day layout (no more horizontal scrolling on mobile)
- `Collapsible` component using native `<details>/<summary>` for zero-JS accordion behavior
- `deploy.sh` script for deploying to Cloudflare Pages (`bike-trip.pages.dev`)

### Changed
- Route maps (RouteMap, OverviewMap) now render as collapsible sections, collapsed by default to reduce scroll on itinerary pages
- Overview section on itinerary pages is now collapsible (open by default)
- All lodging entries on the lodging page are now collapsible (open by default)
- Lodging bookings for Nights 1-6: Hotel Kumoi (Sounkyo), Oehonke (Onneyu Onsen), Dormy Inn Abashiri, Shiretoko Yuhi no Ataruie (Utoro), Livemax Resort (Rausu), BPS HOTELs (Betsukai)
- Lodging bookings for Nights 7-11: Hotel Mashu (Teshikaga), New Akan Hotel (Akanko Onsen), Hotel REUS Ashoro, Nukabira Kanko Hotel, Sounkyo Kanko Hotel
- Booking source tracking (Agoda/Booking.com/Japanican) on each confirmed property

### Changed
- Night 2 destination: Oehonke (Onneyu Onsen) replaces Shiobetsu Tsurutsuru Onsen (no availability)
- Day 2/3 distances and elevation recalculated for new route via Google Maps
- Day 11 route now ends at Sounkyo Onsen (was Kamikawa), Day 12 distance increased to 44.1 mi (was 28.4 mi)
- Route totals updated: ~505 mi, ↑~17,000, ↓~17,700 (was ↑~17,400, ↓~17,600)
- RouteMap addresses and OverviewMap waypoints updated to match confirmed bookings
- 2025 page title updated to "Itinerary — Hokkaido 2025" (was "2025 — Japan & Korea")

### Fixed
- 2025 Omu and Esashi map pins now use hotel names to avoid wrong Google Maps locations

### Added
- Mileage and elevation totals row at bottom of route tables (both years)
- Reformatted 2025 itinerary to match 2026 style (MDX with route table, day badges, RouteMap + OverviewMap components)
- Multi-trip site structure with year-scoped URLs (/2025/, /2026/)
- Trips listing page at / with cards for 2025 and 2026
- Planning page with route notes, key regions, distance guidelines, and open questions
- Compact dark sticky header with dropdown navigation menu
- Dropdown shows current section name as trigger (e.g. "Itinerary ∨")
- Day badges (white number in black circle) and elevation arrow badges in route table
- URL redirects from old flat paths (/flights → /2026/flights, etc.)
- Lodging page with confirmed Dormy Inn Sapporo bookings and nightly overview table
- Days 7-8 route: Betsukai → Teshikaga (37.9 mi) → Akanko Onsen (30.6 mi) with route maps
- Complete 12-day route: Akan → Ashoro → Nukabira → Kamikawa → Asahikawa (train to Sapporo)
- OverviewMap component for full route visualization
- RouteMap components for Days 9-12

### Changed
- Restructured content into src/content/{year}/ directories
- Moved pages under src/pages/{2025,2026}/ for year scoping
- Compact header: "Bike Tour" + year link + dropdown (replaces large title + inline nav)
- Switched from prose-lg to prose for tighter text layout
- Extracted planning content from itinerary into dedicated Planning page
- Personalized gear list with actual kit (Garmin Edge 1050, Lems, Tevas, Alfort, Pocari Sweat)
- Navigation: Ride With GPS routes on Garmin Edge 1050 + phone offline backup
- Trimmed language/tips sections — removed obvious advice
- Compact layout: prose-sm base, smaller headings, tighter spacing throughout

### Removed
- SIM/eSIM references (using Google Fi)
- Google Translate tips
- Generic gear recommendations replaced with actual items

### Previously Added
- Multi-page site: split content into 6 pages (itinerary, flights, bike, gear, resources, tips)
- Sticky navigation with title header ("Hokkaido Bike Tour / Summer 2026")
- Flight details: AA confirmation CJUIPK, RDU↔CTS Jun 27–Jul 12, $2,194.83
- Route days 3–6: Abashiri, Utoro/Shiretoko, Rausu (Livemax Resort), Betsukai (BPS Hotels)
- Placeholder rows for days 7–12 with dates through Sat 7/11 (last night in Sapporo)
- Embedded Google Maps for each confirmed route day (days 1–6)
- Minimal monochrome design: Inter font (self-hosted), teal accent color, clean typography
- Astro View Transitions for SPA-like navigation (no font flash between pages)
- Table headers now uppercase muted style; HRs more spacious
- Route table now includes day of week and date (Tue 6/30 through Sat 7/11)

### Previously Added
- 2025 itinerary reference file with all bookings, transit, and daily mileage from last year's trip
- PostCSS config for Tailwind v4 migration
- .claude/ to .gitignore

### Changed
- Personalized trip plan with confirmed details: Shibetsu start, Disc Trucker bike, Dormy Inn Annex storage, guest house + onsen hotel accommodation strategy
- Replaced generic route options with Shibetsu-to-Sapporo route plan
- Updated daily distance guidelines in miles (35-70mi range)
- Updated bike setup with actual gear (Disc Trucker, Ortlieb bags)

### Removed
- Camping gear section and camping-related references (trip is guest house / hotel only)
- Generic bike case storage options (replaced with confirmed Dormy Inn Annex plan)
- Generic bike model recommendations (replaced with actual bike specs)
