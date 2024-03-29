import React from 'react';
import bagsCategory from '../assets/anime-merch-bags.webp';
import shirtsCategory from '../assets/anime-merch-shirts.webp';
import bundleCategory from '../assets/anime-merch-bundle.webp';
import hatsCategory from '../assets/anime-merch-hats.webp';
import stickerCategory from '../assets/anime-merch-stickers.webp';
import bannerCategory from '../assets/anime-merch-banners.webp';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: bagsCategory, link: 'https://www.google.com' },
    { id: 2, image: shirtsCategory, link: 'https://www.google.com' },
    { id: 3, image: bundleCategory, link: 'https://www.google.com' },
    { id: 4, image: bagsCategory, link: 'https://www.google.com' },
    { id: 5, image: bagsCategory, link: 'https://www.google.com' },
    { id: 6, image: shirtsCategory, link: 'https://www.google.com' },
    { id: 7, image: bundleCategory, link: 'https://www.google.com' },
    { id: 8, image: bagsCategory, link: 'https://www.google.com' },
  ];

  return (
    <section className="w-screen h-auto py-12">
      <div className="grid sm:grid-cols-2 sm:grid-rows-4 grid-cols-2 grid-rows-4">
        {galleryItems.map((item) => (
          <a key={item.id} href={item.link}>
            <div className="relative w-full sm:h-[300px] h-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300" style={{ backgroundImage: `url(${item.image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

