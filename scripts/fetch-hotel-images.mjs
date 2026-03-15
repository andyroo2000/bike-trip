#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../public/images/hotels');

const API_KEY = process.env.PUBLIC_GOOGLE_MAPS_API_KEY;
if (!API_KEY) {
  console.error('ERROR: PUBLIC_GOOGLE_MAPS_API_KEY not set. Run with: PUBLIC_GOOGLE_MAPS_API_KEY=... node scripts/fetch-hotel-images.mjs');
  process.exit(1);
}

const hotels = [
  { slug: 'dormy-inn-sapporo',  query: 'Dormy Inn Sapporo Annex' },
  { slug: 'hotel-kumoi',        query: 'Hotel Kumoi Sounkyo Onsen Kamikawa Hokkaido' },
  { slug: 'oehonke',            query: 'Oehonke Onneyu Onsen Rubeshibe Kitami Hokkaido' },
  { slug: 'dormy-inn-abashiri', query: 'ドーミーイン網走' },
  { slug: 'shiretoko-yuhi',     query: 'Shiretoko Yuhi no Ataruie Onsen Hostel Utoro Shari Hokkaido' },
  { slug: 'livemax-rausu',      query: 'Livemax Resort Rausu' },
  { slug: 'bps-hotels',         query: 'BPS HOTELS Betsukai Hokkaido' },
  { slug: 'hotel-mashu',        query: 'ホテルまあしゅ 弟子屈' },
  { slug: 'new-akan-hotel',     query: 'New Akan Hotel' },
  { slug: 'hotel-reus-ashoro',  query: 'Hotel Reus Ashoro' },
  { slug: 'nukabira-kanko',     query: 'Nukabirakan Kanko Hotel' },
  { slug: 'sounkyo-kanko',      query: 'Sounkyo Kankou Hotel Sounkyo Onsen Kamikawa Hokkaido' },
];

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} downloading image`);
  const buf = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buf));
}

async function fetchHotelImage(hotel) {
  const destPath = path.join(OUTPUT_DIR, `${hotel.slug}.jpg`);
  if (fs.existsSync(destPath)) {
    console.log(`  [skip] ${hotel.slug} — already exists`);
    return true;
  }

  // Step 1: Text search
  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(hotel.query)}&key=${API_KEY}`;
  const searchData = await fetchJson(searchUrl);

  if (!searchData.results?.length) {
    console.error(`  [fail] ${hotel.slug} — no results for query: "${hotel.query}"`);
    return false;
  }

  const placeId = searchData.results[0].place_id;
  const placeName = searchData.results[0].name;
  console.log(`  [found] ${hotel.slug} → "${placeName}" (${placeId})`);

  // Step 2: Place details to get photos
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${API_KEY}`;
  const detailsData = await fetchJson(detailsUrl);

  const photos = detailsData.result?.photos;
  if (!photos?.length) {
    console.error(`  [fail] ${hotel.slug} — no photos available`);
    return false;
  }

  const photoRef = photos[0].photo_reference;

  // Step 3: Download photo
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoRef}&key=${API_KEY}`;
  await downloadImage(photoUrl, destPath);
  console.log(`  [saved] ${hotel.slug}.jpg`);
  return true;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Fetching images for ${hotels.length} hotels...\n`);

  let success = 0, fail = 0;
  for (const hotel of hotels) {
    try {
      const ok = await fetchHotelImage(hotel);
      ok ? success++ : fail++;
    } catch (err) {
      console.error(`  [error] ${hotel.slug} — ${err.message}`);
      fail++;
    }
  }

  console.log(`\nDone: ${success} saved, ${fail} failed.`);
}

main();
