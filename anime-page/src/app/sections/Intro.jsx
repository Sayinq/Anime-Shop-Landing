import React from 'react'
import Image from 'next/image'

{/* Assets */}
import introCards from '../assets/anime-store-cards.svg';

const Intro = () => {
    return (
        <section id="intro" className="w-screen h-auto bg-indigo-600">
            <div id="intro-wrapper" className="flex flex-col w-screen h-auto p-8">
                {/* Head */}
                <div className="flex flex-row w-auto h-auto">
                    <div id="intro-image" className="w-fit h-fit">
                        <Image
                            src={introCards}
                            alt=""
                            className=""
                        />
                    </div>
                    <div id="intro-bold-text" className="w-fit h-fit text-end">
                        <h2 className="text-xl font-black italic uppercase">It's Forever Us Against Them All</h2>
                    </div>
                </div>

                {/* Middle */}
                <div className="w-full h-auto border-b-1 border-white">
                    <h2>Some text to see where I'm at</h2>
                </div>
            </div>
        </section>
    )
}

export default Intro