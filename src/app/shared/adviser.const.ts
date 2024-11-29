export const ORIGINAL_ADVISERS = [
  {
    image: './assets/images/advisors/jorge.png',
    name: 'Jorge Santamaría',
    position: 'Fundador y asesor inmobiliario',
    email: 'jsantamaria@invien.mx',
    phone: '+52 662 112 2880',
  },
  {
    image: './assets/images/advisors/advisor.png',
    name: 'Gaby Mancilla',
    position: 'Fundadora y asesora inmobiliaria',
    email: 'gmancilla@invien.mx',
    phone: '+52 81 8088 2015',
  },
  {
    image: './assets/images/advisors/advisor.png',
    name: 'Christian Janette Lopez',
    position: 'Gerente',
    email: 'jsantamaria@invien.mx',
    phone: '55 1234 5678',
  },
  {
    image: './assets/images/advisors/advisor.png',
    name: 'C. Janet López',
    position: 'Gerente',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/margarita.png',
    name: 'Margarita Quintana',
    position: 'Asesora inmobiliaria',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/luis.png',
    name: 'Lius Fdo. Ochoa',
    position: 'Asesor inmobiliario',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/martha.png',
    name: 'Martha Briseño',
    position: 'Asesora inmobiliaria',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/ivan.png',
    name: 'Iván Arredondo',
    position: 'Asesor inmobiliario',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
  {
    image: './assets/images/advisors/alejandra.png',
    name: 'Alejandra Castro',
    position: 'Asesor inmobiliaria',
    email: 'mbriseno@invien.mx',
    phone: '+52 662 256 1058',
  },
];

export const ADVISERS: any[][] = [];

const splitArray = (numParts: number) => {
  const partLength = Math.ceil(ORIGINAL_ADVISERS.length / numParts);
  for (let index = 0; index < partLength; index++) {
    const start = index * numParts;
    const end = start + numParts;
    if (numParts > 2) {
      ORIGINAL_ADVISERS.sort();
      ADVISERS.push(ORIGINAL_ADVISERS.slice(start, end));
    } else ADVISERS.push(ORIGINAL_ADVISERS.slice(start, end));
  }
};

(() => {
  if (window.innerWidth > 992) splitArray(3);
  else splitArray(1);
})();
