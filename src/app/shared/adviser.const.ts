import { Adviser } from './interfaces/adviser.interface';

const ORIGINAL_ADVISERS: Adviser[] = [
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/martha.png',
    name: 'Martha Briseño',
    position: 'Asesora inmobiliaria',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
];

export const ADVISERS: Adviser[][] = [];

const splitArray = (numParts: number) => {
  const partLength = Math.ceil(ORIGINAL_ADVISERS.length / numParts);
  for (let index = 0; index < partLength; index++) {
    const start = index * numParts;
    const end = start + numParts;
    if (numParts > 2) {
      ORIGINAL_ADVISERS.sort();
      ADVISERS.push(ORIGINAL_ADVISERS.sort(() => -1).slice(start, end));
    } else ADVISERS.push(ORIGINAL_ADVISERS.slice(start, end));
  }
};

(() => {
  if (window.innerWidth > 992) splitArray(3);
  else splitArray(1);
})();
