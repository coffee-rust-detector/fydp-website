import React from 'react'
import "./AboutUsItem.css";

function AboutUsItem(props) {
    return (
        <div className='aboutusitem-container'>
            <div className='name'>
                {props.name}
            </div>
            <div className={props.cName}>
            </div>
            <div className='title'>
                {props.title}
            </div>
        </div>
    )
}

export default AboutUsItem
