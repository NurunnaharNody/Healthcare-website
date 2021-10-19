import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';


const Details = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
          fetch('../../../../public/services.json')
          .then(res => res.json())
          .then(data => setService(data));
    }, [])
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h2> this is {serviceId} </h2>
           {
               service.map(servi => <Detail name={servi.Title} service={servi}></Detail>)
           }
        </div>
    );
};

export default Details;