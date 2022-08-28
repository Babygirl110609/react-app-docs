import React from 'react';
import appsList from "./apps.json";
import { useState } from 'react';
// import portfolioData from '../../utils/portfolioData';
// import ProjectCard from '../utils/skillsData';

function Project() {
    const [apps] = useState(appsList)
    return (<main id="project" className='' Name="contianer maincontainer">

        <h3>Projects</h3>
        {apps.map((application, key) => {
            console.log ("project")
            return (
                <div key={key} className="card">
                    <h5 className="card-title">{application.title}</h5>
                    <img src={process.env.PUBLIC_URL + application.screenshot} className="card-img-top" alt={application.title} />
                    <div className="card-body">
                        <p className="card-text">{application.description}</p>
                        <a href={application.github} className="card-link">Github Repo</a>
                        <a href={application.live} className="card-link">Live link</a>
                    </div>
                </div>
            )
        })}

    </main>
    );
}

export default Project;