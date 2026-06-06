'use client';

import React from 'react';
import { courts } from '@/lib/turf';

interface TurfVisualizationProps {
  bookedCourts: string[];
  blockedCourts: string[];
  availableCourts: string[];
}

export default function TurfVisualization({
  bookedCourts,
  blockedCourts,
  availableCourts
}: TurfVisualizationProps) {
  const getStatus = (courtId: string) => {
    if (bookedCourts.includes(courtId)) return 'booked';
    if (blockedCourts.includes(courtId)) return 'blocked';
    return 'available';
  };

  const topRow = courts.filter((c) => c.id === 'A' || c.id === 'B');
  const bottomRow = courts.filter((c) => c.id === 'C' || c.id === 'D' || c.id === 'E');

  return (
    <div className="turf-visualization">
      <h2>Turf Layout</h2>
      <div className="turf-grid">
        <div className="row top-row">
          {topRow.map((court) => (
            <div
              key={court.id}
              className={`court-box ${getStatus(court.id)}`}
            >
              <div className="court-label">{court.id}</div>
              <div className="court-type">{court.size}v{court.size}</div>
            </div>
          ))}
        </div>
        <div className="row bottom-row">
          {bottomRow.map((court) => (
            <div
              key={court.id}
              className={`court-box ${getStatus(court.id)}`}
            >
              <div className="court-label">{court.id}</div>
              <div className="court-type">{court.size}v{court.size}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
