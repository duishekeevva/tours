import React from 'react';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import HowItWorksSection from "./Components/HowItWorksSection/HowItWorksSection";
import DestinationsSection from "./Components/DestinationsSection/DestinationsSection";

const App = () => {
    return (
        <div>
          <Header/>
            <HeroSection/>
            <HowItWorksSection/>
            <DestinationsSection/>
        </div>
    );
};

export default App;