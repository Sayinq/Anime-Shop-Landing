import React from 'react'
import Image from 'next/image'

{/* Assets */}
import enterButton from '../assets/enter-chrome.webp';

const Hero = () => {
    return (
        <section className="flex items-center justify-center w-screen h-screen bg-green-500">
            <div className="w-fit h-fit sm:scale-75 scale-75">
                <Image
                    src={enterButton}
                    alt="Custom-chrome-enter"
                    className="sm:grayscale hover:grayscale-0 transition-all duration-300"
                />
            </div>
        </section>
    )
}

export default Hero