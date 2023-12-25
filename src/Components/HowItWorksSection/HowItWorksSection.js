import React from 'react';
import './HowItWorksSection.scss'
import Map from '../Assets/map 1.png'
import Binocular from '../Assets/binocular 1.png'
import Bag from '../Assets/backpack 1.png'
import Ukulele from '../Assets/ukelele 1.png'

const HowItWorksSection = () => {
    return (
        <section className={'works-section'}>
            <div className={'container'}>
                <div className={'works-box'}>
                    <div className="row">
                        <div className="col-3">
                            <div className="box">
                                <img  src={Map} alt=""/>
                                <h5>Choose Destination</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing setting</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box">
                                <img src={Binocular} alt=""/>
                                <h5>Choose Destination</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing setting</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box">
                                <img src={Bag} alt=""/>
                                <h5>Choose Destination</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing setting</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box">
                                <img src={Ukulele} alt=""/>
                                <h5>Choose Destination</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing setting</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;