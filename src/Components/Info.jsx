import React from 'react';
import loadingLogo from '../assets/loading.gif'

const Info = () => {
    return (
        <section id="about">
            <div className="section-container tracking-wider grid grid-cols-2 items-center bg-zinc-900 mobile:flex mobile:flex-col mobile:py-10">
                <div className=" flex flex-col items-center justify-center  ">
                    <img className="w-5/6 h-[500px] tablet:w-[350px] tablet:h-[300px] mobile:h-full " src={loadingLogo} alt="loadingLogo"loading="lazy" />
                </div>
                <div className=" w-3/4 text-3xl h-full flex flex-col items-center justify-center laptop:text-xl tablet:text-lg tablet:w-auto mobile:px-5 mobile:justify-evenly">
                    <div className=" leading-normal text-content">
                        <p className="py-4 mobile:py-0">
                            True luxury living starts with a home designed for your ultimate comfort.
                        </p>
                        <p className="mobile:py-2">
                            Alta Vista Homes offers bespoke smart home automation services that create perfectly managed lighting, shades, air quality, climate, cleanliness and more to enhance your lifestyle with ease and comfort with just one touch of a button.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
