import { useState, useEffect } from 'react';
import FramesSlider from './FrameSlider'
import CurtainClose from '../assets/curtainClose.png'
import CurtainOpen from '../assets/curtainOpen.png'


export default function Curtains(props) {
    return (
        <section className="scene4 items-center">
            <canvas ref={props.curtainSlideCanvas} />
            <div className="section-container flex flex-col items-end justify-end text-white">
                <div className="showcase absolute w-full h-screen flex flex-col items-start justify-center px-20 mobile:px-5">
                    <h1 className="text-primary text-6xl font-bold w-4/6 mobile:text-4xl">
                        EVERYDAY EXPERIENCES,<br></br> MADE EXTRAORDINARY.
                    </h1>
                    <div className="text-3xl font-normal">
                        Seamless automated curtain controls.
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-end items-end">
                    <div className=" px-10 w-full h-[15%] flex items-end justify-end controls-filter mobile:px-0">
                        <div className="w-full h-full flex justify-center items-center mobile:justify-between">
                            <span className="px-5">
                                <img className="h-12" src={CurtainOpen} alt="CurtainOpen" loading="lazy"/>
                            </span>
                            <FramesSlider forwardedRef={props.curtainSlideCanvas}
                                scene={props.scene}
                            />
                            <span className="px-5">
                                <img className="h-12" src={CurtainClose} alt="CurtainClose" loading="lazy"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
