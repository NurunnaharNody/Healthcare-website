import React from 'react';
import './ExpertDoctor.css'


const ExpertDoctor = ({expert}) => {
    const {name,img,speciality} = expert;
    return (
        <div className="p-3 single-doctor">
            <img className="w-75" src={img} alt="" />
            <h2> {name} </h2>
            <h6>{speciality}</h6>
        </div>
    );
};

export default ExpertDoctor;