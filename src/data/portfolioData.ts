import type { PortfolioItem } from "../types/portfolio";
import brandbook from "../assets/images/branding.png";
import sm from "../assets/images/sosial media.png";
import motion from "../assets/images/motion.png";
import print from "../assets/images/cap.png";

import prtf2 from "../assets/protfolio/portofino-02.png";
import prtf3 from "../assets/protfolio/portofino-03.png";

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
        images: [prtf2, prtf3, prtf2],
      },
      {
        id: 2,
        name: "Relax",
        slug: "relax",
        images: [prtf3, prtf2],
      },
      {
        id: 3,
        name: "Kəlbəcər",
        slug: "kelbecer",
        images: [prtf2, prtf3, prtf2, prtf3],
      },
      {
        id: 4,
        name: "MV",
        slug: "mv",
        images: [prtf3],
      },
    ],
  },
  {
    id: 2,
    serviceName: "Sosial medya dizayni",
    serviceImage: sm,
    works: [
      {
        id: 1,
        company: "E-sederek",
        year: "2025",
        posts: [
          {
            id: 1,
            images: [
              "https://i.postimg.cc/sXvxbyq1/1.png",
              "https://i.postimg.cc/mZ1hwL75/2.png",
              "https://i.postimg.cc/C581L7FZ/3.png",
              "https://i.postimg.cc/5yz0Ngx0/4.png",
              "https://i.postimg.cc/QC7txmXj/5.png",
              "https://i.postimg.cc/ryRzJV5b/6.png",
              "https://i.postimg.cc/NfhFC3xS/7.png",
              "https://i.postimg.cc/NfhFC34F/8.png",
              "https://i.postimg.cc/PrmxgS39/9.png",
            ],
          },
        ],
      },
      {
        id: 2,
        company: "Relax",
        year: "2025",
        posts: [
          {
            id: 4567,
            images: [
              "https://i.postimg.cc/9Xsb8QKW/1.png",
              "https://i.postimg.cc/gc1sS2QK/2.png",
              "https://i.postimg.cc/KcCfq8wQ/3.png",
              "https://i.postimg.cc/02mfLq1w/4.png",
            ],
          },
          {
            id: 89,
            images: [
              "https://i.postimg.cc/d3ZzbSJ4/1.png",
              "https://i.postimg.cc/HjGfd4LK/2.png",
              "https://i.postimg.cc/14xLsczL/3.png",
              "https://i.postimg.cc/G90ZdJpW/4.png",
              "https://i.postimg.cc/BtWd4cvR/5.png",
            ],
          },
          {
            id: 567,
            images: [
              "https://i.postimg.cc/J4L8wMBM/1.png",
              "https://i.postimg.cc/zXrNm8RC/2.png",
              "https://i.postimg.cc/pXHvNRn8/3.png",
              "https://i.postimg.cc/SNh40kzc/4.png",
              "https://i.postimg.cc/kXmCrqtK/5.png",
            ],
          },
          {
            id: 6789,
            images: [
              "https://i.postimg.cc/2S9g5D3x/1.png",
              "https://i.postimg.cc/pd94h6nZ/2.png",
              "https://i.postimg.cc/CKZXBQfm/3.png",
              "https://i.postimg.cc/fb3ptr05/4.png",
            ],
          },
          {
            id: 234,
            images: [
              "https://i.postimg.cc/9FWktM7g/b1.png",
              "https://i.postimg.cc/3JncLTXP/b2.png",
              "https://i.postimg.cc/kXfpjmQH/b3.png",
              "https://i.postimg.cc/pXq60HQM/b4.png",
              "https://i.postimg.cc/8Pt0ySRn/b5.png",
              "https://i.postimg.cc/HknPRh3W/b6.png",
            ],
          },
          {
            id: 7890,
            images: [
              "https://i.postimg.cc/G3zKRj4c/1.png",
              "https://i.postimg.cc/nVT2x1X2/2.jpg",
              "https://i.postimg.cc/gc4spKxD/3.png",
            ],
          },
          {
            id: 8909,
            images: [
              "https://i.postimg.cc/BQkxZ746/1.png",
              "https://i.postimg.cc/T3bnKj3q/2.png",
              "https://i.postimg.cc/nhmqXKh7/3.png",
            ],
          },
        ],
      },
      {
        id: 1,
        company: "Sanan Asadzade MMC",
        year: "2025",
        posts: [
          {
            id: 999,
            images: [
              "https://i.postimg.cc/MZjBPb1L/haval.png",
              "https://i.postimg.cc/4Nk9r75c/jetour.png",
              "https://i.postimg.cc/Fs5L2dZJ/leopard-5.png",
              "https://i.postimg.cc/hPWdHzrd/leopard-8.png",
              "https://i.postimg.cc/jqJfgQz5/offroad-cover.png",
              "https://i.postimg.cc/3J5vP4BB/rox01.png",
            ],
          },
          {
            id: 876,
            images: [
              "https://i.postimg.cc/sDs2YpmZ/cover.png",
              "https://i.postimg.cc/hPstpf3v/g318.png",
              "https://i.postimg.cc/vHhZ3cSG/s05.png",
              "https://i.postimg.cc/7Y9ZmfQZ/s07.png",
              "https://i.postimg.cc/jdcSZL3F/s09.png",
            ],
          },
          {
            id: 7890,
            images: [
              "https://i.postimg.cc/DfYCsg7v/byd-cover.png",
              "https://i.postimg.cc/j5MMM6NS/byd-destroyer.png",
              "https://i.postimg.cc/BQLmCKvb/byd-qin.png",
              "https://i.postimg.cc/Qx9fqTMV/changan-a05.png",
              "https://i.postimg.cc/Qx9fqTMX/toyota.png",
            ],
          },
          {
            id: 432,
            images: [
              "https://i.postimg.cc/GtrsT69G/ZEEKR-001.png",
              "https://i.postimg.cc/Zncv8jys/ZEEKR-007.png",
              "https://i.postimg.cc/T195VQWC/ZEEKR-7X.png",
              "https://i.postimg.cc/gjDLV46B/zeekr-cover.png",
              "https://i.postimg.cc/kGcRQwtp/ZEEKR-X.png",
            ],
          },
          {
            id: 2345,
            images: [
              "https://i.postimg.cc/J0647FX5/suv-cover.png",
              "https://i.postimg.cc/nrRcVWmn/gac.png",
              "https://i.postimg.cc/zvtXDQhT/geely.png",
              "https://i.postimg.cc/gjSkc7hR/jetour.png",
              "https://i.postimg.cc/x8xTjZmv/leopard-8.png",
            ],
          },
          {
            id: 3242,
            images: [
              "https://i.postimg.cc/26jDqwrT/premium-cover.png",
              "https://i.postimg.cc/PxfjL4Tw/denza-n9.png",
              "https://i.postimg.cc/HxWgJ2d6/leopard-8.png",
              "https://i.postimg.cc/9MXh4pCJ/lixiang-9.png",
              "https://i.postimg.cc/bJYhGTp6/lynk-co.png",
              "https://i.postimg.cc/Tw26y9f7/Zeekr-9X.png",
            ],
          },
          {
            id: 5678,
            images: [
              "https://i.postimg.cc/PJm92vXN/byd-cover.png",
              "https://i.postimg.cc/m2s0hjjP/u7.png",
              "https://i.postimg.cc/BQBRFF7L/u8.png",
              "https://i.postimg.cc/pXHgyCCy/u8-copy.png",
            ],
          },
          {
            id: 345678,
            images: [
              "https://i.postimg.cc/KYxzNtm8/2.png",
              "https://i.postimg.cc/W484ft4S/changan-changan-DEEPAL-S07.png",
              "https://i.postimg.cc/GpKpS9p7/changan-changan-qiyuan.png",
              "https://i.postimg.cc/25G5X350/changan-changan-UNIV.png",
              "https://i.postimg.cc/W484ft4Y/changan-changan-uniz.png",
              "https://i.postimg.cc/LXssdRqN/changan-changan-A05.png",
            ],
          },
          {
            id: 44567,
            images: [
              "https://i.postimg.cc/fynTVd22/changan-cover.png",
              "https://i.postimg.cc/Cxm1cz5R/avalon.png",
              "https://i.postimg.cc/d3PthCNw/toyota-corollo.png",
              "https://i.postimg.cc/ZntKWNst/toyota-high.png",
              "https://i.postimg.cc/8cQP7vXG/toyota-rav4.png",
            ],
          },
          {
            id: 34567,
            images: [
              "https://i.postimg.cc/WzCmF5Lb/4.png",
              "https://i.postimg.cc/8c9dJZQJ/muqayise.png",
            ],
          },
          {
            id: 345678,
            images: [
              "https://i.postimg.cc/Jh031s2x/cover.png",
              "https://i.postimg.cc/NMr1HWYk/geely.png",
              "https://i.postimg.cc/gjF3qNkS/tesla.png",
              "https://i.postimg.cc/4ykpbBNF/xiaomi.png",
            ],
          },
          {
            id: 456789,
            images: [
              "https://i.postimg.cc/k5NCg5Ry/byd-cover.png",
              "https://i.postimg.cc/4dBTpF5J/byd-qin.png",
              "https://i.postimg.cc/50nM8k36/destr05.png",
              "https://i.postimg.cc/tT2HFm5s/seal05.png",
              "https://i.postimg.cc/FzzXpgWr/seal06.png",
            ],
          },
          {
            id: 345678,
            images: [
              "https://i.postimg.cc/V6dcBWHX/zeekr-cover.png",
              "https://i.postimg.cc/0Qbqd0Hr/ZEEKR-001.png",
              "https://i.postimg.cc/85jVBmnr/ZEEKR-007.png",
              "https://i.postimg.cc/FR7QgVn3/Zeekr-007-GT.png",
              "https://i.postimg.cc/tTYHtNmh/ZEEKR-7X.png",
              "https://i.postimg.cc/4dqR8Hr6/ZEEKR-X.png",
            ]
          },
          {
            id: 23456789,
            images: [
              "https://i.postimg.cc/qBxGxHyy/Group-of-7-assets-changan-cover2.png",
              "https://i.postimg.cc/xTj3sp3R/Group-of-7-assets-toyota-BZ3-X.png",
              "https://i.postimg.cc/vH8tP2tv/Group-of-7-assets-toyota-camry.png",
              "https://i.postimg.cc/8PkmyXmm/Group-of-7-assets-toyota-cross.png",
              "https://i.postimg.cc/qMBxmDxw/Group-of-7-assets-toyota-frontlander.png",
              "https://i.postimg.cc/J475TYQm/Group-of-7-assets-toyota-high.png",
            ]
          },
          {
            id:66678,
            images:[
              "https://i.postimg.cc/6Qx7PyNW/changan-qiyuan.png",
              "https://i.postimg.cc/QMZBzHrc/changan-uni-z.png", 
              "https://i.postimg.cc/QMZBzHrp/honda.png",
              "https://i.postimg.cc/6Qx7PyNr/song-plus.png",
              "https://i.postimg.cc/pdM9Spt8/standart-suv.png"
            ]
          },
          {
            id:34567890,
            images:[
              "https://i.postimg.cc/KvKRvnGn/avatr-06.png",
              "https://i.postimg.cc/J49tyG0Z/bazar.png",
              "https://i.postimg.cc/bNKdGsrS/lynk-co-07.png",
              "https://i.postimg.cc/rFvzdKst/lynk-co-900.png",
              "https://i.postimg.cc/Kvd4KRjT/zeekr-x.png"
            ]
          },
          {
            id:23456789,
            images:[
              "https://i.postimg.cc/0yR2kFHx/premium-cov.png",              
              "https://i.postimg.cc/cLy4x25N/lixiang.png",
              "https://i.postimg.cc/GmF3HKZd/lynk-co.png",
              "https://i.postimg.cc/CxGMz7WF/VOYAH-FREE.png",
              "https://i.postimg.cc/GmF3HKZb/ZEEKR.png",
            ]
          },
          {
            id:23456789,
            images:[
              "https://i.postimg.cc/2S7qPCjc/sedan-cov.png",              
              "https://i.postimg.cc/6pf7DB6Z/avatr-06.png",
              "https://i.postimg.cc/T3JyZT2S/mazda.png",
              "https://i.postimg.cc/s2fBzb1K/sonata.png",
              "https://i.postimg.cc/Ls4qSGhN/zeekr.png",
            ]
          },
          {
            id:34567890,
            images:[
              "https://i.postimg.cc/25X5D6sW/zeekr-cover.png",              
              "https://i.postimg.cc/3wwwVpcD/ZEEKR-001.png",
              "https://i.postimg.cc/W4f4v3Bd/ZEEKR-007.png",
              "https://i.postimg.cc/q7Z7TRPh/ZEEKR-7X.png",
              "https://i.postimg.cc/pd1dHTwF/ZEEKR-X.png",
            ]
          },
          {
            id:456789,
            images:[
              "https://i.postimg.cc/gkdm18xS/offroad-cover.png",              
              "https://i.postimg.cc/xjL9st1p/deepal.png",
              "https://i.postimg.cc/tCyp8Wsf/haval.png",
              "https://i.postimg.cc/c4Z0PwKq/jetour.png",
              "https://i.postimg.cc/J4mMSZsd/leopard.png",
              "https://i.postimg.cc/nckpxr78/rox01.png",
            ]
          },
          {
            id:234567890,
            images:[
              "https://i.postimg.cc/Jh031s2x/cover.png" ,
              "https://i.postimg.cc/NMr1HWYk/geely.png" ,
              "https://i.postimg.cc/gjF3qNkS/tesla.png" ,
              "https://i.postimg.cc/4ykpbBNF/xiaomi.png",
              "https://i.postimg.cc/ZnbsxbRS/jetour.png",             
            ]
          },
          {
            id:34567890,
            images:[
              "https://i.postimg.cc/kXDfJhR4/cover1.png",
              "https://i.postimg.cc/qMgjJZ6c/cs55.png",
              "https://i.postimg.cc/sD1wj0G4/eado.png",
              "https://i.postimg.cc/BQtMSwPM/qiyuan.png",
              "https://i.postimg.cc/rFzQVYRg/uniz.png",

            ]
          },
          {
            id:4567890,
            images:[
              "https://i.postimg.cc/d0W9c2QW/eclass.png",
              "https://i.postimg.cc/RCJL2JkP/MERCEDES-COVER.png",
              "https://i.postimg.cc/RCJL2Jk7/s-class.png",
              "https://i.postimg.cc/HxqXT3qM/c-class.png",

            ]
          },
          {
            id:3456789,
            images:[
              "https://i.postimg.cc/rsqyGrx6/byd.png",
              "https://i.postimg.cc/QCS8fdJx/changan-cs55.png",
              "https://i.postimg.cc/j2vxMS4R/econom-suv.png",
              "https://i.postimg.cc/T1Qdt3JD/geely.png",
              "https://i.postimg.cc/SRVSgxfC/HONDA.png",
              "https://i.postimg.cc/GtzLXmxQ/toyota.png",
            ]
          },
          {
            id:23456789,
            images:[
              "https://i.postimg.cc/ncPZr5d6/accountant.png",
              "https://i.postimg.cc/FsBmzqWR/beyannameci.png",
              "https://i.postimg.cc/pL5vFZ4R/call-center.png",
              "https://i.postimg.cc/JzH8kqv8/dizayner.png",
              "https://i.postimg.cc/0yKvwfFx/hr.png",
              "https://i.postimg.cc/BnP3KgkZ/Hu-quqs-unas.pngs-unas",
              "https://i.postimg.cc/GmTRyQVh/idxal.png",
              "https://i.postimg.cc/RZJmHRyZ/idxal2.png",
              "https://i.postimg.cc/4xHG95qy/idxal3.png",
              "https://i.postimg.cc/P5vHw49P/it-mutex.png",
              "https://i.postimg.cc/W1qVknCD/karguzar.png",
              "https://i.postimg.cc/dVZFyBpk/muhafize.png",
              "https://i.postimg.cc/Z5vmdc2N/muhasib.png", 
              "https://i.postimg.cc/0yKvwfFG/satis.png",
              "https://i.postimg.cc/Cxn0qNXJ/image.png",
            ]
          }
        ],
      },
    ],
  },
  {
    id: 3,
    serviceName: "Motion Dizayn",
    serviceImage: motion,
    works: [],
  },
  {
    id: 4,
    serviceName: "Çap Məhsulları",
    serviceImage: print,
    works: [
      {
        id: 1,
        company: "Çap Şirkəti",
        year: "2025",
        images: [prtf3],
      },
    ],
  },
];
