import { Property } from './interfaces/property.interface';

export const ORIGINAL_PROPERTIES: Property[] = [
  {
    imageUrl: './assets/images/carousel/test1.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test2.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test3.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test1.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test2.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test3.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test1.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test2.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
  {
    imageUrl: './assets/images/carousel/test3.png',
    title: 'Ámbar',
    city: 'Hermosillo, Sonora',
    type: 'Medical and professional center',
    price: 'From $1,500,000',
  },
];

export const PROPERTIES: Property[][] = [];

const splitArray = (numParts: number) => {
  const partLength = Math.ceil(ORIGINAL_PROPERTIES.length / numParts);
  for (let index = 0; index < partLength; index++) {
    const start = index * numParts;
    const end = start + numParts;
    if (numParts > 2) {
      ORIGINAL_PROPERTIES.sort();
      PROPERTIES.push(ORIGINAL_PROPERTIES.sort(() => -1).slice(start, end));
    } else PROPERTIES.push(ORIGINAL_PROPERTIES.slice(start, end));
  }
};

(() => {
  if (window.innerWidth > 992) splitArray(3);
  else splitArray(1);
})();
