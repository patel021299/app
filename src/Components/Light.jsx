import { useEffect } from 'react';
import Controls from './Controls'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Light = (props) => {
    const { lightTemperatureCanvas, lightIntensityCanvas, scene } = props

    useEffect(() => {
        let mm = gsap.matchMedia(),
            breakPoint = 768;

        mm.add({

            // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            reduceMotion: "(prefers-reduced-motion: reduce)"

        }, (context) => {

            let { isDesktop, isMobile, reduceMotion } = context.conditions;

            const targets = gsap.utils.toArray('.showcase')
            const sceneOffset = 3
            targets.forEach((target, index) => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: `.scene${index + sceneOffset}`,
                        start: "top top",
                        end: isDesktop ? "+=400" : "+=300",
                        scrub: true,
                        pin: true,
                    },
                })
                timeline.fromTo(target, { opacity: 1 }, { opacity: 0 })
                timeline.fromTo(`.scene${index + sceneOffset} .controls-filter`, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })
            })
        });


    }, [])

    return (
        <section className="scene3 grid grid-cols-2 items-center mobile:flex mobile:flex-col mobile:justify-evenly mobile:bg-primary">
            <canvas ref={lightTemperatureCanvas} />
            <canvas ref={lightIntensityCanvas} />
            <div className="section-container  grid grid-cols-2 mobile:flex mobile:flex-col">
                <div id="light" className="showcase absolute col-span-2  w-full h-screen flex flex-col items-start justify-center px-20">
                    <h1 className="text-primary text-6xl font-bold mobile:text-3xl">
                        A HUE FOR<br />
                        EVERY MOOD.
                    </h1>
                    <div className="text-3xl font-normal">
                        Range Of Modern Mood Lighting
                    </div>
                </div>

                <div className="h-full flex flex-col justify-end items-end">
                    <Controls
                        canvas={lightTemperatureCanvas}
                        scene={scene.lightTemperature}
                        lightChange={true}
                    />
                </div>
                <div className="h-full flex flex-col justify-end items-center">
                    <Controls
                        canvas={lightIntensityCanvas}
                        scene={scene.lightIntensity}
                    />
                </div>
            </div>
        </section>
    );
}

export default Light;
