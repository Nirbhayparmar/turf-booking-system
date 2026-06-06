'use client';

import React from 'react';
import { courts } from '@/lib/turf';

interface CourtSelectorProps {
  bookedCourts: string[];
  onToggle: (courtId: string) => void;
  blockedCourts: string[];
}

export default function CourtSelector({
  bookedCourts,
  onToggle,
  blockedCourts
}: CourtSelectorProps) {
  return (
    <div className="court-selector">
      <h2>Select Courts</h2>
      <div className="court-buttons">
        {courts.map((court) => (
          <button
            key={court.id}
            onClick={() => onToggle(court.id)}
            className={`court-btn ${bookedCourts.includes(court.id) ? 'booked' : ''} ${
              blockedCourts.includes(court.id) ? 'blocked' : ''
            }`}
            disabled={blockedCourts.includes(court.id)}
          >
            <div className="court-id">{court.id}</div>
            <div className="court-size">{court.size}v{court.size}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
