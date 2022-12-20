import React, { useRef, useMemo, createContext } from 'react';

//Animation Image Sequence
import { HeroSequence, LightIntensity, LightTemperature, CurtainSequence } from '../utils/scenes';

const ImageSequenceBuilder = (scene) => {
    let images = []
    for (let i = 0; i < scene().frameCount; i++) {
        const img = new Image();
        img.src = scene(i).source;
        img.onload = () => {
        }
        images.push(img);
    }
    return [scene().frameCount, images];
}



export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

    const scrollAnimCanvas = useRef();
    const lightTemperatureCanvas = useRef();
    const lightIntensityCanvas = useRef();
    const curtainSlideCanvas = useRef();

    const animations = useMemo(() => {
        const data = {
            heroSequence: ImageSequenceBuilder(HeroSequence),
            curtainSequence: ImageSequenceBuilder(CurtainSequence),
            light: {
                lightIntensity: ImageSequenceBuilder(LightIntensity),
                lightTemperature: ImageSequenceBuilder(LightTemperature),
            }
        }
        return data
    }, [])

    return (
        <StoreContext.Provider
            value={{
                scrollAnimCanvas,
                lightTemperatureCanvas,
                lightIntensityCanvas,
                curtainSlideCanvas,
                animations
            }}>
            {children}
        </StoreContext.Provider>
    )

}

