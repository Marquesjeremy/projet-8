import React from 'react';
import { FaStar } from 'react-icons/fa';


function Modale({ location }) {
    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
        {ratingScore.map((element) =>
            location >= element ? (
            <FaStar key={element.toString()} className='starsRed'/>
            ) : (
            <FaStar key={element.toString()} className='starsGrey'/>
            )
        )}
        </React.Fragment>
    );
}

export default Modale;
