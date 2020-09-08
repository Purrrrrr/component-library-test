import React, {useMemo} from 'react';
import './Placekitten.css';

export function Placekitten() {
  const n = useMemo(() => Math.floor(Math.random()*16), []);
  return <div className="placekitten">
    <img src={`https://placekitten.com/100/100?image=${n}`} alt="Kitten" />
  </div>;
}
