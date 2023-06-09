import React from 'react';
import Intro from './intro';
import Details from './Details';
import KeyFeatures from './KeyFeatures';
import Carousel from './Carousel';
import Outro from './Outro';
import Footer from './Footer';

function App(){
    return (
        <div>
           <Intro />
           <Details />
           <KeyFeatures />
           {/* <Carousel /> */}
           <Outro />
           <Footer />
        </div>
    
    );
}

export default App;



// intro component -Done
// auth component  -Done
// details component -Done
// key feature components - Done
// slider component - Incomplete
// outro component
// footer component