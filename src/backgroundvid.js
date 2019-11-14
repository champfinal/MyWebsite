import React from 'react';
import './backgroundvid.css'

export class Backgroundvid extends React.Component{
    render(){
        return(<div>
                <video autoPlay muted loop>
                    <source src="https://res.cloudinary.com/du9o2fwol/video/upload/v1573721364/Other_Places_Lothric_Dark_Souls_III_1_m7hsxf.mp4" type="video/mp4"></source>
                </video>
                <div className="Container">
                <h1 className="Overlay">Hi, I'm Sujay.</h1>
                <h2>I'm an aspiring game developer seeking to bring exciting new experiences through this medium.</h2>
                </div>
            </div>
        )
    }
}