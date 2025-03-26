/* file for importing the pictures and exporting, making an array of objects to extract the values and exporting them
 */

/* cars images */
import LH_2020 from "./cars/LH_2020.jpg";

import LHSTO_2024 from "./cars/LHSTO_2024.jpg";

import LR_2024 from "./cars/LR_2024.jpg";

import F296GTS_2024 from "./cars/F296GTS_2024.jpg";

import F296GTB_2023 from "./cars/F296GTB_2023.jpg";

import RRS_2023 from "./cars/RRS_2023.jpg";

import MBAMGGT63_2024 from "./cars/MBAMGGT63_2024.jpg";

import FR_2024 from "./cars/FR_2024.jpg";

import BMWM5G90_2024 from "./cars/BMWM5G90_2024.jpg";

import GAC_2023 from "./cars/GAC_2023.jpg"

import BMWM3C_2024 from "./cars/BMWM3C_2024.jpg";

import PCTGTC_2023 from "./cars/PCTGTC_2023.jpg";

import LUS_2023 from "./cars/LUS_2023.jpg";

import BB_2020 from "./cars/BB_2020.jpg";

import P911TS_2023 from "./cars/P911TS_2023.jpg"

import FP_2024 from "./cars/FP_2024.jpg";

import TA_2023 from "./cars/TA_2023.jpg"

import MBG400D_2024 from "./cars/MBG400D_2024.jpg";



/*icons */
import menuIcon from "./menu_icon.png";
import cartIcon from "./cartImage.png";
import profileIcon from "./profile.png";
import lookIcon from "./look-image.png";
/* logos */
import bugatti from "./bugatti.jpg";
import carHero from "./car_hero.png";
import carLogo from "./car-logo.png";
import logo from "./logo.png";


export const assets = {
  lookIcon,
  profileIcon,
  cartIcon,
  menuIcon,
  carHero,
  carLogo,
  logo,
  bugatti
};

export const cars = [
  {
    id: "1",
    name: "Lamborghini Huracan",
    price: 365000,
    image: [LH_2020],
    category: "coupe",
    productionYear: 2020,
    engine: {
      horsepower: "640 h.p.",
      fuel: "petrol",
      consumption: "5.2L"
    },
    tax: 960,
    drive:  "full-drive",
    color: "red"
  },
  {
    id: "2",
    name: "Lamborghini Huracan STO",
    price: 420000,
    image: [LHSTO_2024],
    category: "coupe",
    productionYear: 2024,
    engine: {
      horsepower: "620 h.p.",
      fuel: "petrol",
      consumption: "5.2L"
    },
    tax: 960,
    drive: "rear-wheel drive",
    color: "green"
  },
  {
    id: "3",
    name: "Lamborghini Revuelto",
    price: 990000,
    image: [LR_2024],
    category: "coupe",
    productionYear: 2024,
    engine: {
      horsepower: "1020 h.p.",
      fuel: "hybrid",
      consumption: "6.3L"
    },
    tax: 1200,
    drive: "full-drive",
    color: "green"
  },
  {
    id: "4",
    name: "Ferrari 296 GTS",
    price: 410000,
    image: [F296GTS_2024],
    category: "coupe",
    productionYear: 2024,
    engine: {
      horsepower: "840 h.p.",
      fuel: "petrol",
      consumption: "3.0L"
    },
    tax: 990,
    drive: "rear-wheel drive",
    color: "yellow"
  },
  {
    id: "5",
    name: "Ferrari 296 GTB",
    price: 310000,
    image: [F296GTB_2023],
    category: "coupe",
    productionYear: 2023,
    engine: {
      horsepower: "820 h.p.",
      fuel: "hybrid",
      consumption: "3.1L"
    },
    tax: 960,
    drive: "rear-wheel drive",
    color: "red"
  },
  {
    id: "6",
    name: "Rolls-Royce Spectre",
    price: 700000,
    image: [RRS_2023],
    category: "coupe",
    productionYear: 2023,
    engine: {
      horsepower: "580 h.p.",
      fuel: "electro",
      consumption: "480KW"
    },
    tax: 0,
    drive: "full-drive",
    color: "gray"
  },
  {
    id: "7",
    name: "Mercedes-Benz AMG GT 63",
    price: 312000,
    image: [MBAMGGT63_2024],
    category: "coupe",
    productionYear: 2024,
    engine: {
      horsepower: "570 h.p.",
      fuel: "petrol",
      consumption: "4.1L"
    },
    tax: 860,
    drive: "full-drive",
    color: "black"
  },
  {
    id: "8",
    name: "Ferrari Roma",
    price: 389000,
    image: [FR_2024],
    category: "coupe",
    productionYear: 2024,
    engine: {
      horsepower: "632 h.p.",
      fuel: "petrol",
      consumption: "3.9L"
    },
    tax: 2100,
    drive: "full-drive",
    color: "red"
  },
  {
    id: "9",
    name: "BMW M5 (G90)",
    price: 220000,
    image: [BMWM5G90_2024],
    category: "sedan",
    productionYear: 2024,
    engine: {
      horsepower: "770 h.p.",
      fuel: "hybrid",
      consumption: "4.4L"
    },
    tax: 1100,
    drive: "full-drive",
    color: "gray"
  },
  {
    id: "10",
    name: "GAC Aion Hyptec SSR (Hyper SSR)",
    price: 223000,
    image: [GAC_2023],
    category: "coupe",
    productionYear: 2023,
    engine: {
      horsepower: "1230 h.p.",
      fuel: "Electro",
      consumption: "900KW"
    },
    tax: 0,
    drive: "full-drive",
    color: "red"
  },
  {
    id: "11",
    name: "BMW M3 Competition",
    price: 160000,
    image: [BMWM3C_2024],
    category: "sedan",
    productionYear: 2024,
    engine: {
      horsepower: "520 h.p.",
      fuel: "petrol",
      consumption: "3.0L"
    },
    tax: 760,
    drive: "full-drive",
    color: "green"
  },
  {
    id: "12",
    name: "Porshce Cayenne Turbo GT Coupe",
    price: 300000,
    image: [PCTGTC_2023],
    category: "coupe",
    productionYear: 2023,
    engine: {
      horsepower: "640 h.p.",
      fuel: "petrol",
      consumption: "4.0L"
    },
    tax: 978,
    drive: "full-drive",
    color: "gray"
  },
  {
    id: "13",
    name: "Lamborghini Urus S",
    price: 400000,
    image: [LUS_2023],
    category: "off-road",
    productionYear: 2023,
    engine: {
      horsepower: "666 h.p.",
      fuel: "petrol",
      consumption: "4.0L"
    },
    tax: 1200,
    drive: "full-drive",
    color: "yellow"
  },
  {
    id: "14",
    name: "Bentley Bentayga",
    price: 230000,
    image: [BB_2020],
    category: "off-road",
    productionYear: 2020,
    engine: {
      horsepower: "550 h.p.",
      fuel: "petrol",
      consumption: "4.2L"
    },
    tax: 810,
    drive: "full-drive",
    color: "light-gray"
  },
  {
    id: "15",
    name: "Porsche 911 Turbo S",
    price: 380000,
    image: [P911TS_2023],
    category: "coupe",
    productionYear: 2023,
    engine: {
      horsepower: "650 h.p.",
      fuel: "petrol",
      consumption: "3.5L"
    },
    tax: 1143,
    drive: "full-drive",
    color: "mate-gray"
  },
  {
    id: "16",
    name: "Ferrari Purosangue",
    price: 850000,
    image: [FP_2024],
    category: "off-road",
    productionYear: 2024,
    engine: {
      horsepower: "720 h.p.",
      fuel: "petrol",
      consumption: "6.5L"
    },
    tax: 1060,
    drive: "full-drive",
    color: "blue"
  },
  {
    id: "17",
    name: "Toyota Alphard",
    price: 140000,
    image: [TA_2023],
    category: "Minivan",
    productionYear: 2023,
    engine: {
      horsepower: "190 h.p.",
      fuel: "petrol",
      consumption: "2.5L"
    },
    tax: 200,
    drive: "full-drive",
    color: "black"
  },
  {
    id: "18",
    name: "Mercedes-Benz G 400 d",
    price: 234000,
    image: [MBG400D_2024],
    category: "off-road",
    productionYear: 2024,
    engine: {
      horsepower: "320 h.p.",
      fuel: "petrol",
      consumption: "2.9L"
    },
    tax: 1400,
    drive: "full-drive",
    color: "blue"
  },
];


