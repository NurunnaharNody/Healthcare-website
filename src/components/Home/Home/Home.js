import React from 'react';
import Banner from '../Banner/Banner';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';
import Header from '../Header/Header';
import MedicareUpdate from '../Recommandations/Rcommandations';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <div>
                <Header></Header>
            </div>
            <div>
    <Banner></Banner>
 </div>
 <div>
     <MedicareUpdate></MedicareUpdate>
 </div>
 <div>
   <Services></Services>
 </div>
 <div>
   <ExpertDoctors></ExpertDoctors>
 </div>
        </div>
    );
};

export default Home;