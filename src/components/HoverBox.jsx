import React, { useState } from 'react';

const HoverBox = () => {
   
    const [color, setColor] = useState('blue');

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h2>Hover Exercise</h2>
            
            <div       
                onMouseEnter={() => setColor('red')} 
                
                onMouseLeave={() => setColor('blue')} 
                
                style={{
                    backgroundColor: color,
                    width: '300px',
                    height: '200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                    transition: 'background-color 2s ease',
                    cursor: 'pointer'
                }}
            >
                {color === 'blue' ? 'Hover over me!' : 'I am Red now!'}
            </div>
            
            <p style={{ marginTop: '10px' }}>Current Color: {color}</p>
        </div>
    );
};

export default HoverBox;