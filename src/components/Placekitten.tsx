import React, {useMemo} from 'react';
import './Placekitten.css';

interface PlacekittenProps {
  /** The number of the kitten picture to use. Integer from 1 to 16 */
  kittenNum?: number
}

/** A simple placeholder kitten component
 */
export default function Placekitten({kittenNum} : PlacekittenProps) {
  const n = useMemo(() => ensureBetween(1, 16, kittenNum ?? Math.ceil(Math.random()*16)), [kittenNum]);
  return <div className="placekitten">
    <img src={`https://placekitten.com/100/100?image=${n}`} alt="Kitten" />
  </div>;
}

function ensureBetween(min: number, max: number, num: number): number {
  return Math.max(min, Math.min(max, num));
}
