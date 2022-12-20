import { useState, useEffect } from 'react';

import FramesSlider from './FrameSlider'

import lightLowIcon from '../assets/lightLowIcon.png'
import lightHighIcon from '../assets/lightHighIcon.png'

export default function Controls(props) {
    const [toggleSwitch, setToggleSwitch] = useState(false)

    const handleToggleSwitch = () => {
        setToggleSwitch(!toggleSwitch)
    }
    return (
        <div className="w-full p-8 flex items-center justify-center controls-filter mobile:py-4">
            {props.lightChange && (
                <div className="gap-5 flex flex-row items-center">
                    <span className="w-10 text-primary font-medium">{toggleSwitch ? "ON" : "OFF"}</span>
                    <label className="px-5 switch">
                        <input type="checkbox" onClick={handleToggleSwitch} defaultChecked={toggleSwitch} />
                        <span className="checkbox rounded-full"></span>
                    </label>
                </div>)
            }

            <div className={`w-full flex justify-center items-center `}>
                <span className="px-5">
                    <img className="" src={lightLowIcon} alt="lowLight" loading="lazy" />
                </span>

                <FramesSlider forwardedRef={props.canvas}
                    scene={props.scene}
                    lightChange={props.lightChange}
                    toggleSwitch={toggleSwitch} />

                <span className="px-5">
                    <img className="" src={lightHighIcon} alt="highLight" loading="lazy" />
                </span>
            </div>

        </div>

    )
}
