import React, { useState } from 'react'

const Toggle  =()=>{
    const[isOn, setIsOn] = useState(false);

const [text, setText] = useState("");

const handelToggle = () =>{
    setIsOn(!isOn);
};

const handleInputChange = (event) =>{
    setText(event.target.value)
}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            
            <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd' }}>
                <h2>Toggle Exercise</h2>
                <h1>The switch is {isOn ? 'ON' : 'OFF'}</h1>
                <button 
                    onClick={handelToggle}
                    style={{
                        padding: '10px 20px',
                        fontSize: '15px',
                        cursor: 'pointer',
                        backgroundColor: isOn ? '#4CAF50' : '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    {isOn ? 'Turn OFF' : 'Turn ON'}
                </button>
            </div>

            <div style={{ padding: '20px', border: '1px solid #ddd' }}>
                <h2>Input Mirroring Exercise</h2>
                <input 
                    type="text" 
                    placeholder="Type something here..."
                    value={text}
                    onChange={handleInputChange}
                    style={{ padding: '10px', width: '250px', fontSize: '16px' }}
                />
                <p style={{ marginTop: '15px', fontSize: '18px', color: '#555' }}>
                    <strong>Mirror Text:{text}</strong> 
                </p>
            </div>
        </div>
  );
};

export default Toggle