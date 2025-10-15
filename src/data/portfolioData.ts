// // src/data/portfolioData.ts
// import type { PortfolioItem } from '../types/portfolio';
// import brandbook from "../assets/images/branding.png"
// import sm from "../assets/images/sosial media.png"
// import motion from "../assets/images/motion.png"
// import print from "../assets/images/cap.png"
// import mv from "../assets/images/mv.png";
// import giftshop from "../assets/images/giftshop.png";
// import saatstore from "../assets/images/saat store.png";
// import esederek from "../assets/images/esederek.png";
// import tripsee from "../assets/images/tripsee.png";
// import sananAgazade from "../assets/images/sanan asadzade.png";
// import karibu from "../assets/images/karibu.png";
// import relax from "../assets/images/relax.png";
// import kelbecer from "../assets/images/kelbecer.png";

// export const brandingClients: { [key: string]: { name: string; image: string } } = {
//   karibu: { name: "Karibu", image: karibu },
//   relax: { name: "Relax", image: relax },
//   kelbecer: { name: "Kəlbəcər", image: kelbecer },
//   mv: { name: "MV", image: mv },
//   giftshop: { name: "Gift Shop", image: giftshop },
//   saatstore: { name: "Saat Store", image: saatstore },
//   "sanan-agazade": { name: "Sanan Ağazade", image: sananAgazade },
//   tripsee: { name: "Tripsee", image: tripsee },
//   esederek: { name: "E-Sədərək", image: esederek },
// };

// export const portfolioData: PortfolioItem[] = [
//   {
//     id: 1,
//     serviceName: "Brendbook",
//     serviceImage: brandbook,
//     works: [
//       {
//         id: 1,
//         type: "carousel",
//         ProjectName: "Karibu",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: [
//           "https://i.postimg.cc/qq7GJMbF/brand-guidline-02.png",
//           "https://i.postimg.cc/T3bJYs0T/brand-guidline-03.png",
//           "https://i.postimg.cc/7hQnf8jZ/brand-guidline-04.png",
//           "https://i.postimg.cc/BZhghHtf/brand-guidline-05.png",
//           "https://i.postimg.cc/3JdZzND4/brand-guidline-06.png",
//           "https://i.postimg.cc/02FCvvpt/brand-guidline-07.png",
//           "https://i.postimg.cc/KYyrK5pB/brand-guidline-08.png",
//           "https://i.postimg.cc/wBc5DsnP/brand-guidline-09.png",
//           "https://i.postimg.cc/Y0j1cDjK/brand-guidline-10.png",
//           "https://i.postimg.cc/k4JQsgm5/brand-guidline-11.png",
//           "https://i.postimg.cc/9MLGnHmY/brand-guidline-12.png",
//           "https://i.postimg.cc/DfYrQhY2/brand-guidline-13.png",
//           "https://i.postimg.cc/D0D17QbW/brand-guidline-14.png",
//         ],
//       },
//       {
//         id: 2,
//         type: "carousel",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         ProjectName: "E-Sədərək",
//         images: [
//           "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
//           "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
//           "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
//           "https://i.postimg.cc/PfzGN66z/e-sederek-bb-22.png",
//           "https://i.postimg.cc/pXJ2bVbv/e-sederek-bb-21.png",
//           "https://i.postimg.cc/T31B7TTC/e-sederek-bb-23.png",
//           "https://i.postimg.cc/FH68wwRm/e-sederek-bb-24.png",
//           "https://i.postimg.cc/xdbhQgJm/e-sederek-bb-25.png",
//           "https://i.postimg.cc/DZkDwsLM/e-sederek-bb-26.png",
//           "https://i.postimg.cc/bJx5DJRN/e-sederek-bb-27.png",
//           "https://i.postimg.cc/6qBmdXHV/e-sederek-bb-28.png",
//           "https://i.postimg.cc/59mGfX0s/e-sederek-bb-29.png",
//           "https://i.postimg.cc/BQQzbJP4/e-sederek-bb-30.png",
//         ],
//       },
//       {
//         id: 3,
//         type: "carousel",
//         ProjectName: "Sanan Asadzada MMC",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: [
//           "https://i.postimg.cc/sg0xqf7X/sanan-asadzade-brandbook-14.png",
//           "https://i.postimg.cc/G3BXHpCs/sanan-asadzade-brandbook-15.png",
//           "https://i.postimg.cc/P5M4Bpm0/sanan-asadzade-brandbook-16.png",
//           "https://i.postimg.cc/9XvJTjmg/sanan-asadzade-brandbook-17.png",
//           "https://i.postimg.cc/HsX39PjY/sanan-asadzade-brandbook-18.png",
//           "https://i.postimg.cc/XYWLHcyw/sanan-asadzade-brandbook-19.png",
//           "https://i.postimg.cc/CKLNYh75/sanan-asadzade-brandbook-20.png",
//           "https://i.postimg.cc/43L1xD25/sanan-asadzade-brandbook-21.png",
//           "https://i.postimg.cc/PxCQpSBk/sanan-asadzade-brandbook-22.png",
//           "https://i.postimg.cc/RF2QccBJ/sanan-asadzade-brandbook-23.png",
//           "https://i.postimg.cc/vT97XcYq/sanan-asadzade-brandbook-24.png",
//           "https://i.postimg.cc/SQzGmt66/sanan-asadzade-brandbook-25.png",
//         ],
//       },
//       {
//         id: 4,
//         type: "carousel",
//         ProjectName: "Emeyveli",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: [
//           "https://i.postimg.cc/jdxQydVX/emeyveli-bb-14.png",
//           "https://i.postimg.cc/8C6hT7W1/emeyveli-bb-15.png",
//           "https://i.postimg.cc/VkTqyqJG/emeyveli-bb-16.png",
//           "https://i.postimg.cc/02VGnRPq/emeyveli-bb-17.png",
//           "https://i.postimg.cc/W1tGfW1q/emeyveli-bb-18.png",
//           "https://i.postimg.cc/ydC0x7X0/emeyveli-bb-19.png",
//           "https://i.postimg.cc/ZnT3PjQR/emeyveli-bb-20.png",
//           "https://i.postimg.cc/MT0VjgdN/emeyveli-bb-21.png",
//           "https://i.postimg.cc/HnBM6XGt/emeyveli-bb-22.png",
//           "https://i.postimg.cc/Pf41fsL8/emeyveli-bb-23.png",
//           "https://i.postimg.cc/153wfC67/emeyveli-bb-24.png",
//           "https://i.postimg.cc/QxY55QJ8/emeyveli-bb-25.png",
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     serviceName: "Sosial medya dizayni",
//     serviceImage: sm,
//     works: [
//       {
//         id: 2,
//         type: "carousel",
//         ProjectName: "E-Sədərək",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: [
//           "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
//           "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
//           "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
//           "https://i.postimg.cc/PfzGN66z/e-sederek-bb-22.png",
//           "https://i.postimg.cc/pXJ2bVbv/e-sederek-bb-21.png",
//           "https://i.postimg.cc/T31B7TTC/e-sederek-bb-23.png",
//           "https://i.postimg.cc/FH68wwRm/e-sederek-bb-24.png",
//           "https://i.postimg.cc/xdbhQgJm/e-sederek-bb-25.png",
//           "https://i.postimg.cc/DZkDwsLM/e-sederek-bb-26.png",
//           "https://i.postimg.cc/bJx5DJRN/e-sederek-bb-27.png",
//           "https://i.postimg.cc/6qBmdXHV/e-sederek-bb-28.png",
//           "https://i.postimg.cc/59mGfX0s/e-sederek-bb-29.png",
//           "https://i.postimg.cc/BQQzbJP4/e-sederek-bb-30.png",
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     serviceName: "Motion Dizayn",
//     serviceImage: motion,
//     works: [
//       {
//         id: 1,
//         type: "video",
//         ProjectName: "Saat Store",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         video: "motion1.mp4",
//       },
//       {
//         id: 2,
//         type: "single",
//         ProjectName: "Readeng Publishing",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: ["motion2.png"],
//       },
//     ],
//   },
//   {
//     id: 4,
//     serviceName: "Çap Məhsulları",
//     serviceImage: print,
//     works: [
//       {
//         id: 1,
//         type: "single",
//         ProjectName: "Aseto Group",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: ["print1.png"],
//       },
//       {
//         id: 2,
//         type: "carousel",
//         ProjectName: "E-Sədərək",
//         year: "2025",
//         about: "It's designed to replace multiple plugins by offering a complete suite of widgets and templates focused on e-commerce functionality.",
//         images: ["print2.png", "print3.png", "print4.png"],
//       },
//     ],
//   },
// ];
// import brandbook from "../assets/images/branding.png";
// import sm from "../assets/images/sosial media.png";
// import motion from "../assets/images/motion.png";
// import printProducts from "../assets/images/cap.png";

// // Branding clients logolari
// import mv from "../assets/images/mv.png";
// import giftshop from "../assets/images/giftshop.png";
// import saatstore from "../assets/images/saat store.png";
// import esederek from "../assets/images/esederek.png";
// import tripsee from "../assets/images/tripsee.png";
// import sananAgazade from "../assets/images/sanan asadzade.png";
// import karibu from "../assets/images/karibu.png";
// import relax from "../assets/images/relax.png";
// import kelbecer from "../assets/images/kelbecer.png";

// import type { PortfolioItem } from "../types/portfolio";

// export const brandingClients = [
//   { id: 1, name: "Karibu", slug: "karibu", image: karibu },
//   { id: 2, name: "Relax", slug: "relax", image: relax },
//   { id: 3, name: "Kəlbəcər", slug: "kelbecer", image: kelbecer },
//   { id: 4, name: "MV", slug: "mv", image: mv },
//   { id: 5, name: "Gift Shop", slug: "giftshop", image: giftshop },
//   { id: 6, name: "Saat Store", slug: "saatstore", image: saatstore },
//   { id: 7, name: "Sanan Ağazade", slug: "sanan-agazade", image: sananAgazade },
//   { id: 8, name: "Tripsee", slug: "tripsee", image: tripsee },
//   { id: 9, name: "E-Sədərək", slug: "esederek", image: esederek },
// ];

// export const portfolioData: PortfolioItem[] = [
//   {
//     id: 1,
//     serviceName: "Brendbook",
//     serviceImage: brandbook,
//     isBranding: true,
//     brandings: [
//       {
//         id: 1,
//         name: "Karibu",
//         slug: "karibu",
//         images: [
//           "https://i.postimg.cc/qq7GJMbF/brand-guidline-02.png",
//           "https://i.postimg.cc/T3bJYs0T/brand-guidline-03.png",
//           "https://i.postimg.cc/7hQnf8jZ/brand-guidline-04.png",
//           "https://i.postimg.cc/BZhghHtf/brand-guidline-05.png",
//           "https://i.postimg.cc/3JdZzND4/brand-guidline-06.png",
//           "https://i.postimg.cc/02FCvvpt/brand-guidline-07.png",
//           "https://i.postimg.cc/KYyrK5pB/brand-guidline-08.png",
//           "https://i.postimg.cc/wBc5DsnP/brand-guidline-09.png",
//           "https://i.postimg.cc/Y0j1cDjK/brand-guidline-10.png",
//           "https://i.postimg.cc/k4JQsgm5/brand-guidline-11.png",
//           "https://i.postimg.cc/9MLGnHmY/brand-guidline-12.png",
//           "https://i.postimg.cc/DfYrQhY2/brand-guidline-13.png",
//           "https://i.postimg.cc/D0D17QbW/brand-guidline-14.png",
//         ],
//       },
//       {
//         id: 2,
//         name: "E-Sədərək",
//         slug: "esederek",
//         images: [
//           "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
//           "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
//           "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
//           "https://i.postimg.cc/PfzGN66z/e-sederek-bb-22.png",
//         ],
//       },
//       {
//         id: 3,
//         name: "Sanan Ağazade",
//         slug: "sanan-agazade",
//         images: [
//           "https://i.postimg.cc/sg0xqf7X/sanan-asadzade-brandbook-14.png",
//           "https://i.postimg.cc/G3BXHpCs/sanan-asadzade-brandbook-15.png",
//           "https://i.postimg.cc/P5M4Bpm0/sanan-asadzade-brandbook-16.png",
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     serviceName: "Sosial Medya Dizayni",
//     serviceImage: sm,
//     isBranding: false,
//     works: [
//       {
//         id: 1,
//         type: "carousel",
//         ProjectName: "E-Sədərək",
//         year: "2025",
//         about: "Sosial medya kampaniyası tasarımları",
//         images: [
//           "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
//           "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
//           "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     serviceName: "Motion Dizayn",
//     serviceImage: motion,
//     isBranding: false,
//     works: [
//       {
//         id: 1,
//         type: "video",
//         ProjectName: "Saat Store",
//         year: "2025",
//         about: "Motion grafik video tasarımı",
//         video: "https://via.placeholder.com/800x600?text=Motion+Video",
//       },
//       {
//         id: 2,
//         type: "single",
//         ProjectName: "Reading Publishing",
//         year: "2025",
//         about: "Motion dizayn statiği",
//         images: ["https://via.placeholder.com/800x1000?text=Motion+Design"],
//       },
//     ],
//   },
//   {
//     id: 4,
//     serviceName: "Çap Məhsulları",
//     serviceImage: printProducts,
//     isBranding: false,
//     works: [
//       {
//         id: 1,
//         type: "single",
//         ProjectName: "Aseto Group",
//         year: "2025",
//         about: "Çap məhsulları dizaynu",
//         images: ["https://via.placeholder.com/800x1000?text=Print+Design"],
//       },
//       {
//         id: 2,
//         type: "carousel",
//         ProjectName: "E-Sədərək Print",
//         year: "2025",
//         about: "Çap məhsulları koleksiyonu",
//         images: [
//           "https://via.placeholder.com/800x1000?text=Print+1",
//           "https://via.placeholder.com/800x1000?text=Print+2",
//           "https://via.placeholder.com/800x1000?text=Print+3",
//         ],
//       },
//     ],
//   },
// ];

import type { PortfolioItem } from "../types/portfolio";

// Əgər şəkillər yoxdursa bu placeholders istifadə olunacaq
const brandbook = "https://i.postimg.cc/qq7GJMbF/brand-guidline-02.png";
const sm = "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png";
const motion = "https://via.placeholder.com/400x500/667eea/ffffff?text=Motion";
const printProducts = "https://via.placeholder.com/400x500/f093fb/ffffff?text=Print";

// Branding clients logolari - ƏSAS IMPORT olarsa dəyişdirin
const mv = "https://via.placeholder.com/100x100/000000/ffffff?text=MV";
const giftshop = "https://via.placeholder.com/100x100/000000/ffffff?text=Gift";
const saatstore = "https://via.placeholder.com/100x100/000000/ffffff?text=Saat";
const esederek = "https://via.placeholder.com/100x100/000000/ffffff?text=Esederek";
const tripsee = "https://via.placeholder.com/100x100/000000/ffffff?text=Tripsee";
const sananAgazade = "https://via.placeholder.com/100x100/000000/ffffff?text=Sanan";
const karibu = "https://via.placeholder.com/100x100/000000/ffffff?text=Karibu";
const relax = "https://via.placeholder.com/100x100/000000/ffffff?text=Relax";
const kelbecer = "https://via.placeholder.com/100x100/000000/ffffff?text=Kelbecer";

// ƏSAS IMPORT KODUNUZ (uncomment edin şəkillər varsa):
// import brandbook from "../assets/images/branding.png";
// import sm from "../assets/images/sosial media.png";
// import motion from "../assets/images/motion.png";
// import printProducts from "../assets/images/cap.png";
// import mv from "../assets/images/mv.png";
// import giftshop from "../assets/images/giftshop.png";
// import saatstore from "../assets/images/saat store.png";
// import esederek from "../assets/images/esederek.png";
// import tripsee from "../assets/images/tripsee.png";
// import sananAgazade from "../assets/images/sanan asadzade.png";
// import karibu from "../assets/images/karibu.png";
// import relax from "../assets/images/relax.png";
// import kelbecer from "../assets/images/kelbecer.png";

export const brandingClients = [
  { id: 1, name: "Karibu", slug: "karibu", image: karibu },
  { id: 2, name: "Relax", slug: "relax", image: relax },
  { id: 3, name: "Kəlbəcər", slug: "kelbecer", image: kelbecer },
  { id: 4, name: "MV", slug: "mv", image: mv },
  { id: 5, name: "Gift Shop", slug: "giftshop", image: giftshop },
  { id: 6, name: "Saat Store", slug: "saatstore", image: saatstore },
  { id: 7, name: "Sanan Ağazade", slug: "sanan-agazade", image: sananAgazade },
  { id: 8, name: "Tripsee", slug: "tripsee", image: tripsee },
  { id: 9, name: "E-Sədərək", slug: "esederek", image: esederek },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    serviceName: "Brendbook",
    serviceImage: brandbook,
    isBranding: true,
    brandings: [
      {
        id: 1,
        name: "Karibu",
        slug: "karibu",
        images: [
          "https://i.postimg.cc/qq7GJMbF/brand-guidline-02.png",
          "https://i.postimg.cc/T3bJYs0T/brand-guidline-03.png",
          "https://i.postimg.cc/7hQnf8jZ/brand-guidline-04.png",
          "https://i.postimg.cc/BZhghHtf/brand-guidline-05.png",
          "https://i.postimg.cc/3JdZzND4/brand-guidline-06.png",
          "https://i.postimg.cc/02FCvvpt/brand-guidline-07.png",
          "https://i.postimg.cc/KYyrK5pB/brand-guidline-08.png",
          "https://i.postimg.cc/wBc5DsnP/brand-guidline-09.png",
          "https://i.postimg.cc/Y0j1cDjK/brand-guidline-10.png",
          "https://i.postimg.cc/k4JQsgm5/brand-guidline-11.png",
          "https://i.postimg.cc/9MLGnHmY/brand-guidline-12.png",
          "https://i.postimg.cc/DfYrQhY2/brand-guidline-13.png",
          "https://i.postimg.cc/D0D17QbW/brand-guidline-14.png",
        ],
      },
      {
        id: 2,
        name: "E-Sədərək",
        slug: "esederek",
        images: [
          "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
          "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
          "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
          "https://i.postimg.cc/PfzGN66z/e-sederek-bb-22.png",
        ],
      },
      {
        id: 3,
        name: "Sanan Ağazade",
        slug: "sanan-agazade",
        images: [
          "https://i.postimg.cc/sg0xqf7X/sanan-asadzade-brandbook-14.png",
          "https://i.postimg.cc/G3BXHpCs/sanan-asadzade-brandbook-15.png",
          "https://i.postimg.cc/P5M4Bpm0/sanan-asadzade-brandbook-16.png",
        ],
      },
    ],
  },
  {
    id: 2,
    serviceName: "Sosial Medya Dizayni",
    serviceImage: sm,
    isBranding: false,
    works: [
      {
        id: 1,
        type: "carousel",
        ProjectName: "E-Sədərək",
        year: "2025",
        about: "Sosial medya kampaniyası tasarımları",
        images: [
          "https://i.postimg.cc/Y07JbgSW/e-sederek-bb-18.png",
          "https://i.postimg.cc/8P12vh98/e-sederek-bb-19.png",
          "https://i.postimg.cc/brR4MJGF/e-sederek-bb-20.png",
        ],
      },
    ],
  },
  {
    id: 3,
    serviceName: "Motion Dizayn",
    serviceImage: motion,
    isBranding: false,
    works: [
      {
        id: 1,
        type: "video",
        ProjectName: "Saat Store",
        year: "2025",
        about: "Motion grafik video tasarımı",
        video: "https://via.placeholder.com/800x600?text=Motion+Video",
      },
      {
        id: 2,
        type: "single",
        ProjectName: "Reading Publishing",
        year: "2025",
        about: "Motion dizayn statiği",
        images: ["https://via.placeholder.com/800x1000?text=Motion+Design"],
      },
    ],
  },
  {
    id: 4,
    serviceName: "Çap Məhsulları",
    serviceImage: printProducts,
    isBranding: false,
    works: [
      {
        id: 1,
        type: "single",
        ProjectName: "Aseto Group",
        year: "2025",
        about: "Çap məhsulları dizaynu",
        images: ["https://via.placeholder.com/800x1000?text=Print+Design"],
      },
      {
        id: 2,
        type: "carousel",
        ProjectName: "E-Sədərək Print",
        year: "2025",
        about: "Çap məhsulları koleksiyonu",
        images: [
          "https://via.placeholder.com/800x1000?text=Print+1",
          "https://via.placeholder.com/800x1000?text=Print+2",
          "https://via.placeholder.com/800x1000?text=Print+3",
        ],
      },
    ],
  },
];