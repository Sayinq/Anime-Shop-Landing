import React from 'react';
import bagsCategory from '../assets/anime-merch-bags.webp';
import shirtsCategory from '../assets/anime-merch-shirts.webp';
import bundleCategory from '../assets/anime-merch-bundle.webp';
import hatsCategory from '../assets/anime-merch-hats.webp';
import stickerCategory from '../assets/anime-merch-stickers.webp';
import bannerCategory from '../assets/anime-merch-banners.webp';

const Shop = () => {
  const shopItems = [
    { id: 1, image: bagsCategory, content: 'Bags' },
    { id: 2, image: shirtsCategory, content: 'Shirts' },
    { id: 3, image: bundleCategory, content: 'Bundles' },
    { id: 4, image: hatsCategory, content: 'Lanyards' },
    { id: 5, image: stickerCategory, content: 'Stickers' },
    { id: 6, image: bannerCategory, content: 'Banners'}
  ];

  return (
    <section className="w-screen h-auto p-2 overflow-x-auto">
      <div className="flex">
        {shopItems.map((item) => (
          <div key={item.id} className="relative flex-shrink-0 xl:w-[20%] w-[40%] xl:h-[500px] h-[400px] mr-1" style={{ backgroundImage: `url(${item.image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className="absolute text-center w-full bottom-0 left-0 text-white p-2 text-stroke italic uppercase font-black tracking-[0.08rem]">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;

