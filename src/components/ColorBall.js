import React from 'react'
import { Button } from "react-bootstrap";

function ColorBall({ cor }) {
    return (
        <div className='div-color-btn' style={{paddingRight: '4px'}}>
            <Button active={false} className="btn-color  shadow-none hover-none active" disabled style={{ backgroundColor: cor, width: '1.5rem', height: '1.5rem', borderRadius: '50%', borderWidth: '1px', borderColor: 'gray' }}>
            </Button>
        </div>
    )
}

export default ColorBall