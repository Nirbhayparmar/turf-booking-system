'use client';

import React from 'react';

export default function Legend() {
  return (
    <div className="legend">
      <h3>Legend</h3>
      <div className="legend-items">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color booked"></div>
          <span>Booked</span>
        </div>
        <div className="legend-item">
          <div className="legend-color blocked"></div>
          <span>Blocked</span>
        </div>
      </div>
    </div>
  );
}
