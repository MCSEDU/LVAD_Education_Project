import React from 'react';

export default function Navigation() {
  return (
    <nav aria-label="Primary navigation" style={{ margin: '1rem 0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0, margin: 0 }}>
        <li><a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Tiers</a></li>
        <li><a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Resources</a></li>
      </ul>
    </nav>
  );
}
