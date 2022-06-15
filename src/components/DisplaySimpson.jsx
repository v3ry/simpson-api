import React from 'react';

function DisplaySimpson({ simps }) {
    console.log(simps);
  return (
    simps && (
      <div className='Displaysimpson'>
        <h1>Simpson</h1>
        <img src={simps.image} alt={simps.image} />
        <ul>
          <li>Quote: {simps.quote}</li>
          <li>
            Name: {simps.character} {simps.characterDirection}{' '}
            
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;