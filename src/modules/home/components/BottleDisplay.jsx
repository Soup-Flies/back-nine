import React from 'react'

import Underline from './Underline.jsx'

const hyphenate = phrase => phrase.split(' ').join('-').toLowerCase()

const BottleDisplay = ({ title, img, body }) => {

    const classTitle = hyphenate(title)

    return (
        <div className={classTitle}>
            <img className={`${classTitle}-img`} src={img} alt={`${title} bottle`} />
    
            <h2 className={`${classTitle}-header`}>
                {title} 
            </h2>
            <Underline title={classTitle} />    
    
            <p className={`${classTitle}-body`}>{body}</p>
        </div>
    )
}

export default BottleDisplay;
