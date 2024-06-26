import React from 'react';

function TherapistCard({ therapist }) {
  return (
    <div className="therapistCard">
      <div className="therapistLocation">
        <p>מיקום: {therapist.location}</p>
      </div>
      <div className="therapistInfo">
        <h2>{therapist.name}</h2>
        <p>טלפון: {therapist.phone}</p>
      </div>
    </div>
  );
}

export default TherapistCard;
