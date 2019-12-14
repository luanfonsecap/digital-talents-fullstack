import React from 'react';

export default function SensorList({ sensor }) {
  return (
    <tr>
      <td>{`${sensor.height} cm`}</td>
      <td>{`${sensor.width} cm`}</td>
      <td>{`${sensor.length} cm`}</td>
      <td>{sensor.voltage}</td>
      <td>{sensor.brand.toUpperCase()}</td>
      <td>{sensor.type.toUpperCase()}</td>
      <td>{sensor.lastMeasure}</td>
      <td>{sensor.location}</td>
    </tr>
  );
}
