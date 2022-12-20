import { useLayoutEffect } from 'react';

import { useStoreContext } from '../hooks/useStoreContext'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from '../assets/logo.png'
import Icon1 from '../assets/grid-icon-1.png'
import Icon2 from '../assets/grid-icon-2.png'
import Icon3 from '../assets/grid-icon-3.png'
import Icon4 from '../assets/grid-icon-4.png'

gsap.registerPlugin(ScrollTrigger)


const ScrollSequenceBuilder = (canvas, triggerPoint, source) => {

    const context = canvas.getContext("2d");

    let frameCount = source[0]

    const images = source[1]
    const scenario = {
        frame: 0
    };

    gsap.to(scenario, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            trigger: triggerPoint,
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: 1,
        },
        onUpdate: render,
    });

    images[0].onload = render;

    function render() {
        context.canvas.height = canvas.offsetHeight;
        context.canvas.width = canvas.offsetWidth;

        context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        context.drawImage(images[scenario.frame], 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
}
const Hero = (props) => {
    const { scrollAnimCanvas } = useStoreContext();
    const canvas = scrollAnimCanvas;

    useLayoutEffect(() => {
        ScrollSequenceBuilder(canvas.current, '.scene1', props.scene)
    }, [])

    useLayoutEffect(() => {
        let scrollItems = gsap.utils.toArray('.scroll-item')
        scrollItems.forEach((target, index) => {
            let timeline = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: target,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                },
            })

            if (target.querySelector(".logo")) {
                return timeline.fromTo(target, { opacity: 1 }, { opacity: 0 })
            } else {
                timeline.fromTo(target, { opacity: 0, y: 250, }, { stagger: 0.5, opacity: 1, y: 0 })
                timeline.to(target, { opacity: 0, y: -245, duration: 0.5, })
                return
            }

        })


    }, [])

    return (
        <>
            <section className="scene1">
                <canvas ref={canvas} />
                <div className="section-container">
                    <div className="scroll-container">
                        <div className="scroll-item">
                            <img className="logo mobile:h-[250px]" src={Logo} alt="logo" loading="lazy"/>
                        </div>
                        <div className="scroll-item">
                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-title uppercase">
                                        A Smart home
                                    </div>
                                    <div className="card-content text-3xl font-normal w-[580px] capitalize leading-normal">
                                        the new luxury living standard!
                                        Create your Smart home, with AltaVista Homes!</div>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-item">
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src={Icon2} alt="Icon2" loading="lazy"/>
                                    <div className="card-content">
                                        Set the ambience, as you like,
                                        Adjust your <span>Smart Curtains </span>
                                        With just one press of a button
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-item">
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src={Icon1} alt="Icon1" loading="lazy"/>
                                    <div className="card-content">
                                        <span>Light up </span>
                                        your house to your moods and needs with just <br /> one touch!</div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-item">
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src={Icon3} alt="Icon3" loading="lazy"/>
                                    <div className="card-content">Breathe fresh and free
                                        Control air quality automatically,
                                        With <span>Smart Ventilation</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="scroll-item">
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src={Icon4} alt="Icon4" loading="lazy"/>
                                    <div className="card-content">Keep your home - sparkling clean
                                        and your family - healthy
                                        With Powerful Central Vacuum
                                        <span> Central Vacuum</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default Hero;