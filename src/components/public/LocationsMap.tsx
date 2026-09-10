'use client';

import { useState } from 'react';
import { LOCATIONS } from '@/lib/locations';

// No API key needed: Google's plain "output=embed" query on the maps.google.com search URL
// returns an embeddable map for a text address, unlike the JS Maps API which requires a billed
// API key. Fine for v1's static/no-backend scope — it's a third-party iframe, not a dependency.
export default function LocationsMap() {
  const [selectedName, setSelectedName] = useState(LOCATIONS[0].name);
  const selected = LOCATIONS.find((l) => l.name === selectedName) ?? LOCATIONS[0];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(selected.address)}&output=embed`;

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-brand-green">Find Us on the Map</h2>
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        >
          {LOCATIONS.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <iframe
          key={mapSrc}
          src={mapSrc}
          title={`Map of ${selected.name}`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
