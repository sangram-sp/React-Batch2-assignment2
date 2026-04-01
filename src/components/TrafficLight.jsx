

const TrafficLight =({color}) => {

    const getMessage = () => {
      let message;
        
      if (color === 'red') {
        message = 'STOP';
      } else if (color === 'yellow') {
        message = 'SLOW DOWN';
      } else if (color === 'green') {
        message = 'GO';
      } else {
        message = 'UNKNOWN COLOR';
      }
    return message;
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial' }}>

      <div 
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '0 auto',
          backgroundColor: color, 
          border: '5px solid #333',
          boxShadow: '0 0 20px rgba(0,0,0,0.2)'
        }}
      ></div>

      <h1 style={{ 
        color: color, 
        marginTop: '10px',
        textShadow: '1px 1px 2px #000' 
      }}>
        {getMessage()}
      </h1>
    </div>
    );
};

export default TrafficLight;