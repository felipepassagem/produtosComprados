import React, { useEffect } from 'react'
import { Card } from "react-bootstrap";

function ColorImg({ imgUrl }) {

    useEffect(() => {
        var img = <img src={`https://server.sistemaagely.com.br/${imgUrl}`}> </img>      
    }, [])

    return (
        <div className='div-color-btn' style={{borderWidth: '1px', borderColor: 'gray', paddingRight: '4px'}}>
            
                <Card.Img variant="top rounded-circle" src={`https://server.sistemaagely.com.br/${imgUrl}`} style={{ width: '1.5rem', height: '1.5rem', maxHeight: '1.5rem',  }}/>
            
        </div>
    )
}

export default ColorImg