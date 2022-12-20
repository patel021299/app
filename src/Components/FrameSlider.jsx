import React from 'react'
import { useState, useEffect } from 'react';

export default function FrameSlider(props) {
    const { scene, forwardedRef } = props
    const [frameCount, sceneData] = scene
    const [value, setValue] = useState(1)

    const [update, setUpdate] = useState(false)

    const canvas = forwardedRef

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        var timeOutFunctionId;
        const context = canvas.current.getContext('2d');
        const isMobile = window.innerWidth <= 768;

        const handleResize = e => {
            if (!isMobile) {
                context.canvas.height = canvas.current.offsetHeight;
                context.canvas.width = canvas.current.offsetWidth;
            }
            clearTimeout(timeOutFunctionId);
            timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
        };
        function workAfterResizeIsDone() {
            setUpdate(true);
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        context.canvas.height = context.canvas.offsetHeight;
        context.canvas.width = context.canvas.offsetWidth;
        context.drawImage(sceneData[value], 0, 0, context.canvas.offsetWidth, context.canvas.offsetHeight);
        setUpdate(false); //Spins on the handleResize()
    }, [update, value])

    useEffect(() => {
        if (props.lightChange) {
            if (!props.toggleSwitch) {
                setValue(0)
            } else {
                setValue(Math.floor((frameCount - 1) / 2))
            }
        } else {
            setValue(1)
        }
    }, [props])

    return (
        <>
            <input
                className={`slider ${props.lightChange && props?.toggleSwitch ? "colorSlider" : props.lightChange ? "bg-black" : "bg-primary"}`}
                type="range"
                min="1"
                max={frameCount - 1}
                value={value}
                onChange={handleChange}
                disabled={props.lightChange ? props.toggleSwitch ? false : true : false}
            />
        </>

    )
}
