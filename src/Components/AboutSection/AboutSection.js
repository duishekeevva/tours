import React from 'react';
import LightHouse from '../Assets/lighthouse 1.png'

const AboutSection = () => {
    return (
        <section className={'about-section'}>
            <div className={'container'}>
                <div className="about-box">
                    <div className="row">
                        <div className="col-5">
                            <img src={LightHouse} alt=""/>
                        </div>
                        <div className="col-7">
                            <div className="about-box_content">
                                <h4>We Offering In Total 793 Tours Out The World</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;