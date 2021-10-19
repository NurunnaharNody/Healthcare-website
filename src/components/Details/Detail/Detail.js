import React from 'react';

const Detail = ({service}) => {
    const {img, Title} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{Title}</h2>
        </div>
    );
};

export default Detail;