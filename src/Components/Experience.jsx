import React from 'react'

export default function Experience() {
    return (
        <section id="experience" className="scene5 font-normal">
            <div className="section-container px-36 py-24 flex flex-col laptop:px-7 laptop:py-10 mobile:px-5 mobile:py-12">
                <div className="h-full flex flex-col items-start justify-between">
                    <div className="max-w-3xl ">
                        <h1 className="font-extrabold text-6xl py-2 text-primary leading-tight mobile:text-4xl">
                            See it, Touch it,
                            Experience it, for Real !
                        </h1>
                        <div className="text-3xl leading-normal mobile:text-lg">
                            Step into the world of Smart Home Luxury,
                            Visit the AltaVista Homes Experience Center to feel the joy and comfort of Smart Living
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div className="text-5xl leading-tight mobile:text-lg mobile:w-3/4">
                            Book your visit to the <br/>AltaVista Experience Centre
                        </div>
                        <div className="flex flex-col items-center justify-center truncate">
                            <a href="#contact" className="font-bold text-2xl bg-primary text-navbar py-4 px-10 mx-10 rounded-md mobile:py-3 mobile:px-4 mobile:text-sm">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
