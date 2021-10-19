import React from 'react';

const Detail = ({servi}) => {
    const {img, Title} = servi;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{Title}</h2>
        </div>
    );
};

export default Detail;