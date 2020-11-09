import React from 'react'
import Thumbnail from '../thumbnail/thumbnail.js';
import hadageto from '../../assets/images/hadageto.png';
import ms2 from '../../assets/images/ms2.png';
import lotrDash from '../../assets/images/lotrdash.png';
import ms3 from '../../assets/images/ms3.png';
import ms4 from '../../assets/images/ms4.png';
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="col">
                <div className="intro">
                    <p> 
                        I write and maintain <em><b>scalable codebases</b></em> for websites
                        within the  <b>fullstack</b>. I link databases, payments, 
                        data and email
                        whilst simultaneously desigining frontend components.
                    </p>
                </div>
                <Thumbnail
                    className="hadageto"
                    link="/hadageto"
                    image={hadageto}
                    title="Hadageto"
                    category="Work"
                />
                <Thumbnail
                    className="mobileApp"
                    link="/mobileapp"
                    image={''}
                    title="Done With It"
                    category="Learning"
                />

                <Thumbnail
                    className="project2"
                    link="/milestone3"
                    image={ms3}
                    title="Cookbook"
                    category="Learning"
                />
            </div>
            <div className="col">
                <Thumbnail
                    className="project1"
                    link="/milestone4"
                    image={ms4}
                    title="Artefacts and Curiose"
                    category="Learning"
                />
                <Thumbnail 
                    className="project3"
                    link="/milestone2"
                    image={lotrDash}
                    title="Lord of the Rings Dashboard"
                    category="Learning"
                />
            </div>
        </div>
    )
}
