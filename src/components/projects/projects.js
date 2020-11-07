import React from 'react'


import Thumbnail from '../thumbnail/thumbnail.js';
import hadageto from '../../assets/images/hadageto.png';
import ms2 from '../../assets/images/ms2.png';
import ms3 from '../../assets/images/ms3.png';
import ms4 from '../../assets/images/ms4.png';
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <Thumbnail
                className="hadageto"
                link="/hadageto"
                image={hadageto}
                title="Hadageto"
                category="Work"
            />

            <Thumbnail
                className="project1"
                link="/milestone4"
                image={ms4}
                title="Artefacts and Curiose"
                category="Learning"
            />

            <Thumbnail
                className="project2"
                link="/milestone3"
                image={ms3}
                title="Cookbook"
                category="Learning"
            />

            <Thumbnail 
                className="project3"
                link="/milestone2"
                image={ms2}
                title="Lord of the Rings Dashboard"
                category="Learning"
            />
        </div>
    )
}
