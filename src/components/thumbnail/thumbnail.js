import React from 'react'
import {Link} from 'react-router-dom';
import './thumbnail.css'


export default function Thumbnail({image, link, title, category}) {
    return (
        <div className="project">
            <Link to={link}>
                <div className="project-img">
                    <img src={image} alt="Project" className="image" />
                </div>
                <div className="project-title">
                    <h3>{title}</h3>
                </div>
                <div className="project-category"><p>{category}</p></div>
            </Link>
        </div>
    );
}
