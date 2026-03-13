# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

### Added
- Multi-page site: split content into 6 pages (itinerary, flights, bike, gear, resources, tips)
- Sticky navigation with title header ("Hokkaido Bike Tour / Summer 2026")
- Flight details: AA confirmation CJUIPK, RDU↔CTS Jun 27–Jul 12, $2,194.83
- Route days 3–6: Abashiri, Utoro/Shiretoko, Rausu (Livemax Resort), Betsukai (BPS Hotels)
- Placeholder rows for days 7–12 with dates through Sat 7/11 (last night in Sapporo)
- Embedded Google Maps for each confirmed route day (days 1–6)

### Changed
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
