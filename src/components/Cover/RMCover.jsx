import React from 'react';
import IntroRM from "../Media/IntroRM.mp4"

const RMCover = () => {




    return (
        <div className='cover-container'>
            <video className='video' src={IntroRM} autoPlay loop muted></video>
            
            
        </div>
    );
};

export default RMCover;