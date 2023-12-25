import React from 'react';
import './HeroSection.scss'
const HeroSection = () => {
    return (
        <section className={'hero-section'}>
            <div className={'container'}>
                <div className={'hero-box'}>
                    <div className={'hero-box_content'}>
                        <h2>It’s Time To Explore The World</h2>
                        <button className={'hero-box_content__button'}>Plan Your Trip</button>
                    </div>
                </div>
                <div className={'pagination'}>
                    <div className={'pagination_next-back'}>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="47" height="47" fill="#FF715B"/>
                            <path d="M25.9187 16.2437C26.0687 16.0937 26.275 16 26.5 16C26.725 16 26.9125 16.0937 27.0812 16.2437L27.5687 16.7312C27.8875 17.05 27.8875 17.575 27.5687 17.8937L21.9625 23.5L27.5687 29.1062C27.7188 29.2562 27.8125 29.4625 27.8125 29.6875C27.8125 29.9125 27.7188 30.1188 27.5687 30.2688L27.0812 30.7562C26.9312 30.9062 26.725 31 26.5 31C26.275 31 26.0687 30.9062 25.9187 30.7562L19.2437 24.0813C19.0937 23.9313 19 23.725 19 23.5C19 23.275 19.0937 23.0687 19.2437 22.9188L25.9187 16.2437Z" fill="white"/>
                        </svg>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="45" height="45" stroke="#F5EBE9" stroke-width="2"/>
                            <path d="M20.8938 16.2437C20.7438 16.0937 20.5375 16 20.3125 16C20.0875 16 19.9 16.0937 19.7313 16.2437L19.2438 16.7312C18.925 17.05 18.925 17.575 19.2438 17.8937L24.85 23.5L19.2438 29.1062C19.0938 29.2562 19 29.4625 19 29.6875C19 29.9125 19.0938 30.1188 19.2438 30.2688L19.7313 30.7562C19.8813 30.9062 20.0875 31 20.3125 31C20.5375 31 20.7438 30.9062 20.8938 30.7562L27.5688 24.0813C27.7188 23.9313 27.8125 23.725 27.8125 23.5C27.8125 23.275 27.7188 23.0687 27.5688 22.9188L20.8938 16.2437Z" fill="#FF715B"/>
                        </svg>
                    </div>

                    <svg width="234" height="2" viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="234" height="2" fill="#F5EBE9"/>
                    </svg>
                    <span>03</span>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;