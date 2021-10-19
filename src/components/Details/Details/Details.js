import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';


const Details = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
          fetch('/services.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    useEffect(() =>{
       const singleService = services?.find(service => service.id === serviceId)
       setServices(singleService)
    }, [services])
    return (
        <div> 
          {/* {
              services.map(service => <Detail key={service.id} service={service}></Detail>)
          } */}
        </div>
    );
};

export default Details;