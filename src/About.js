import React from 'react';
import './About.css';

export class About extends React.Component{
    render(){
        return(
            <div className="About">
                <h2 className="uni">I'm currently a senior at the University of Utah.</h2>
                <h5 className="desc">I love all things related to game development, ranging from lighting, to gameplay engineering. I'm well versed in <mark className="important">Unity</mark> and <mark className="important">Unreal</mark> and love whipping
                    out a prototype or two for fun.
                </h5>
            </div>
        )
    }
}