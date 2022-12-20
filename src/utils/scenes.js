// export const HeroSequence = (index = 0) => ({
//     frameCount: 260,
//     source: `./src/assets/HeroSeq/AiR_FL${(index).toString().padStart(3, '0')}.webp`,
// })

// export const LightIntensity = (index = 0) => ({
//     frameCount: 60,
//     source: `./src/assets/LightIntensity/${(index + 1).toString().padStart(4, '0')}.webp`,
// })


// export const LightTemperature = (index = 0) => ({
//     frameCount: 30,
//     source: `./src/assets/LightTemperature/${(index).toString().padStart(4, '0')}.webp`,
// })

// export const CurtainSequence = (index = 0) => ({
//     frameCount: 60,
//     source: `./src/assets/CurtainSeq/${(index + 1).toString().padStart(4, '0')}.webp`,
// })

const environment = import.meta.env
const local_dir = environment.VITE_LOCAL_DIR

export const HeroSequence = (index = 0) => ({
    frameCount: 180,
    source: `${environment.VITE_IMAGE_BUCKET || local_dir}/HeroSeq/AiR_FL${(index + 1).toString().padStart(3, '0')}.webp`,
})
export const LightIntensity = (index = 0) => ({
    frameCount: 60,
    source: `${environment.VITE_IMAGE_BUCKET || local_dir}/LightIntensity/${(index + 1).toString().padStart(4, '0')}.webp`,
})
export const LightTemperature = (index = 0) => ({
    frameCount: 30,
    source: `${environment.VITE_IMAGE_BUCKET || local_dir}/LightTemperature/${(index).toString().padStart(4, '0')}.webp`,
})
export const CurtainSequence = (index = 0) => ({
    frameCount: 60,
    source: `${environment.VITE_IMAGE_BUCKET || local_dir}/CurtainSeq/${(index + 1).toString().padStart(4, '0')}.webp`,
})