import React from 'react';
import AnimatedMap from './home/AnimatedMap';

const Map = () => {
    return (
        <div>
            <div className='block sm:hidden'>
                <AnimatedMap zoom={0.5} maxZoom={8}/>
            </div>
            <div className='hidden sm:block lg:hidden'>
                <AnimatedMap zoom={1} maxZoom={50}/>
            </div>
            <div className='hidden lg:block'>
            <AnimatedMap zoom={2} maxZoom={10}/>
            </div>
        </div>
    );
};

export default Map;