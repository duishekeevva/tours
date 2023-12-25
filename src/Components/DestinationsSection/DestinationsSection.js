import React from 'react';
import './DestinationsSection.scss'
import Cuba from '../Assets/Cuba-city 1.png'
import Paris from '../Assets/Paris-City.png'
import Japan from '../Assets/japan.png'

const DestinationsSection = () => {
    return (
        <section className={'destinations-section'}>
            <div className={'container'}>
                <div className={'destinations-box'}>
                    <div className="row">
                        <div className="col-4">
                            <div className={'destinations-box_content'}>
                                <h4 className={'destinations-box_content__title'}>Top Destinations In The World</h4>
                                <p className={'destinations-box_content__subtitle'}>It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
                                <button className={'destinations-box_content__button'}>Discover More</button>
                            </div>
                        </div>
                        <div className="col-2">
                            <img src={Cuba} alt=""/>
                        </div>
                        <div className="col-2">
                            <img src={Paris} alt=""/>
                        </div>
                        <div className="col-2">
                            <img src={Japan} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationsSection;