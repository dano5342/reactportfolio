import React from 'react'
import {Link} from 'react-router-dom';

import './thumbnail.css'


export default function Thumbnail({image, link, title, category}) {
    return (
        <div className="project">
            <Link to={link}>
                <div className="project-img">
                    <img src={image} alt="Project" />
                </div>
                <div className="project-title">{title}</div>
                <div className="project-category">{category}</div>
            </Link>
        </div>
    );
}
