import React from 'react';
import Image from 'next/image';
import introCards from '../assets/anime-store-cards.svg';

const Intro = () => {
  return (
    <section id="intro" className="relative w-screen h-auto bg-[#232325] z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#232325] opacity-60 z-[2]" />
      <div id="intro-wrapper" className="flex flex-col items-center justify-center w-screen h-auto p-8">
        {/* Head */}
        <div className="relative flex flex-col items-center w-auto h-auto">
          <div id="intro-image" className="w-fit h-fit relative">
            <Image src={introCards} alt="" />
          </div>
          <div id="intro-bold-text" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-center z-[3] px-8">
            <h2 className="font-black text-2xl uppercase">A creative outlet with no boundaries, zero filters, fueled entirely on passion</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

