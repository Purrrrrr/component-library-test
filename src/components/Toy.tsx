import React from 'react';
import './Toy.css';

export default function Toy({emoji}: {emoji?: string}) {
  return <div className="toy">
    <span role="img" aria-label="A duck!">{emoji ?? '🦆'}</span>
  </div>;
}
