import React from 'react'
import Hero from '../components/Hero'
import { AboutUsItems } from '../components/AboutUsItems'
import AboutUsItem from '../components/AboutUsItem'
function AboutUs() {
    return (
        <>
        <div>
            <Hero cName="hero-image-home" text="About Us">
            </Hero>
            <ul>
                    {AboutUsItems.map((item, index) =>{
                        return (
                            <AboutUsItem cName={item.cName} title={item.title} name={item.name} key={index}>
                            </AboutUsItem>
                        )
                    })}
            </ul>
        </div>
        <div className='padding'>
            padding
        </div>
        </>
    )
}

export default AboutUs
