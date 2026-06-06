'use client';

import { useState } from 'react';
import CourtSelector from '@/components/CourtSelector';
import TurfVisualization from '@/components/TurfVisualization';
import ResultsDisplay from '@/components/ResultsDisplay';
import Legend from '@/components/Legend';
import { getAvailableCourts } from '@/lib/turf';
import './page.css';

export default function Home() {
  const [bookedCourts, setBookedCourts] = useState<string[]>([]);

  const handleToggle = (courtId: string) => {
    setBookedCourts((prev) =>
      prev.includes(courtId)
        ? prev.filter((id) => id !== courtId)
        : [...prev, courtId]
    );
  };

  const handleReset = () => {
    setBookedCourts([]);
  };

  const { availableCourts, blockedCourts } = getAvailableCourts(bookedCourts);

  return (
    <main className="app-container">
      <div className="header">
        <h1>Turf Booking System</h1>
        <p>Visualize court availability and overlaps</p>
      </div>

    

      <div className="controls">
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>

      <div className="content-grid">
        <CourtSelector
          bookedCourts={bookedCourts}
          onToggle={handleToggle}
          blockedCourts={blockedCourts}
        />
        <TurfVisualization
          bookedCourts={bookedCourts}
          blockedCourts={blockedCourts}
          availableCourts={availableCourts}
        />
        <ResultsDisplay
          bookedCourts={bookedCourts}
          availableCourts={availableCourts}
          blockedCourts={blockedCourts}
        />
        <Legend />
      </div>
    </main>
  );
}
