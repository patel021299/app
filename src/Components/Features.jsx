import React from 'react'

export default function Features() {
    return (
        <section id="about">
            <div className="section-container grid grid-cols-2 items-center bg-zinc-900 text-5xl mobile:flex mobile:flex-col mobile:text-3xl">
                <div className="vent p-16 w-full h-full flex flex-col items-start justify-end mobile:p-4">
                    <div className="font-extrabold text-primary w-3/4">
                        IMPROVING LIVES, ONE BREATHE AT A TIME.
                    </div>
                    <div className="text-white text-3xl mobile:text-lg">

                        Round-The-Clock Monitoring<br />For Quality Air
                    </div>
                </div>
                <div className="vaccum p-16 w-full h-full flex flex-col items-end justify-end text-right mobile:p-4">
                    <div className="font-bold text-primary w-3/4">
                        CONVENIENCE AT ITS<br /> LUXURIOUS BEST
                    </div>
                    <div className="text-white text-3xl mobile:text-lg">
                        Centralised vacuum systems<br />For Ease and Comfort
                    </div>
                </div>
            </div>
        </section>
    )
}
