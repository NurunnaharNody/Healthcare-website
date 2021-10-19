import React from 'react';
import ExpertDoctor from '../ExpertDoctor/ExpertDoctor';
import './ExpertDoctors.css'

const ExpertDoctors = () => {
    const experts =[
        {
            id:1,
            name:'Anne Jesmin',
            img:'http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/img-team-member-02.jpg',
            speciality:'CHEAF SERGION'
        },
        {
            id:2,
            name:'Peggie Cannon',
            img:'http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/img-team-member-03.jpg',
            speciality:'LEAD NURSE'
        },
        {
            id:3,
            name:'Hubert Jackson',
            img:'http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/img-team-member-04.jpg',
            speciality:'SERGION'
        },
        {
            id:4,
            name:'Chase Franklin',
            img:'http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/img-team-member-01.jpg',
            speciality:'ASSISTANT SURGEON'
        }
    ]
    return (
        <div id="experts" className="container">
            <h2>Care Experts</h2>
            <div className="expert-container">
                {
                   experts.map(expert => <ExpertDoctor expert={expert} key={expert.id}></ExpertDoctor>)
                }
            </div>
            
        </div>
    );
};

export default ExpertDoctors;