import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Detail;