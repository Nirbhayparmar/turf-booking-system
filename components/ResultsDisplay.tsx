'use client';

import React from 'react';

interface ResultsDisplayProps {
  bookedCourts: string[];
  availableCourts: string[];
  blockedCourts: string[];
}

export default function ResultsDisplay({
  bookedCourts,
  availableCourts,
  blockedCourts
}: ResultsDisplayProps) {
  return (
    <div className="results-display">
      <h2>Results</h2>
      <div className="results-grid">
        <div className="result-box">
          <h3>Booked</h3>
          <div className="court-list booked-list">
            {bookedCourts.length > 0 ? (
              <code>{JSON.stringify(bookedCourts)}</code>
            ) : (
              <span className="empty">None</span>
            )}
          </div>
        </div>
        <div className="result-box">
          <h3>Available</h3>
          <div className="court-list available-list">
            {availableCourts.length > 0 ? (
              <code>{JSON.stringify(availableCourts)}</code>
            ) : (
              <span className="empty">None</span>
            )}
          </div>
        </div>
        <div className="result-box">
          <h3>Blocked</h3>
          <div className="court-list blocked-list">
            {blockedCourts.length > 0 ? (
              <code>{JSON.stringify(blockedCourts)}</code>
            ) : (
              <span className="empty">None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
