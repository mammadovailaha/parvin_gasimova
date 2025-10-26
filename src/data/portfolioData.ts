import type { PortfolioItem } from "../types/portfolio";
import brandbook from "../assets/images/branding.png";
import sm from "../assets/images/sosial media.png";
import motion from "../assets/images/motion.png";
import print from "../assets/images/cap.png";
import karibuCover from "../assets/protfolio/karibu-cover.png"
import print2 from "../assets/protfolio/portofino-08.png"

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
          karibuCover,
          "https://i.postimg.cc/RVs7n5c6/brand-guidline-02.png",
          "https://i.postimg.cc/P5CmW344/brand-guidline-03.png",
          "https://i.postimg.cc/X7HfySwK/brand-guidline-04.png",
          "https://i.postimg.cc/4NL6hkzb/brand-guidline-05.png",
          "https://i.postimg.cc/FsWyJ5jV/brand-guidline-06.png",
          "https://i.postimg.cc/vHqr6FWj/brand-guidline-07.png",
          "https://i.postimg.cc/vZ4Wrqzh/brand-guidline-08.png",
          "https://i.postimg.cc/wj1hXfVw/brand-guidline-09.png",
          "https://i.postimg.cc/Gm4kF7Km/brand-guidline-10.png",
          "https://i.postimg.cc/K81nPqfh/brand-guidline-11.png",
          "https://i.postimg.cc/fRVxc2Cz/brand-guidline-12.png",
          "https://i.postimg.cc/Cx9bmGrf/brand-guidline-13.png",
          "https://i.postimg.cc/qvW2jsDq/brand-guidline-14.png",

        ],
      },
      {
        id: 2,
        name: "Emeyveli",
        slug: "meyveli",
        images: [
          "https://i.postimg.cc/nzdHHkD0/emeyveli-bb-15.png",
          "https://i.postimg.cc/T1pThDVk/emeyveli-bb-16.png",
          "https://i.postimg.cc/5y6fjCBr/emeyveli-bb-17.png",
          "https://i.postimg.cc/3Nd3WvXb/emeyveli-bb-18.png",
          "https://i.postimg.cc/XqpnXCfs/emeyveli-bb-19.png",
          "https://i.postimg.cc/wM793m5T/emeyveli-bb-20.png",
          "https://i.postimg.cc/gjnGrZy2/emeyveli-bb-21.png",
          "https://i.postimg.cc/5y6fjC5t/emeyveli-bb-22.png",
          "https://i.postimg.cc/ZnCJ0dPC/emeyveli-bb-23.png",
          "https://i.postimg.cc/2yMrWSTj/emeyveli-bb-24.png",
          "https://i.postimg.cc/Y2spZd75/emeyveli-bb-25.png",

        ],
      },
      {
        id: 3,
        name: "Esederek",
        slug: "esederek",
        images: [
          "https://i.postimg.cc/K8YCb2N8/e-sederek-bb-18.png",
          "https://i.postimg.cc/MprNKFPB/e-sederek-bb-19.png",
          "https://i.postimg.cc/P5F9rR3p/e-sederek-bb-20.png",
          "https://i.postimg.cc/13Y25jC0/e-sederek-bb-21.png",
          "https://i.postimg.cc/7ZQdYWsb/e-sederek-bb-22.png",
          "https://i.postimg.cc/CKBtZsXZ/e-sederek-bb-23.png",
          "https://i.postimg.cc/zfbMLF6H/e-sederek-bb-24.png",
          "https://i.postimg.cc/PqpcLQ9D/e-sederek-bb-25.png",
          "https://i.postimg.cc/tgZf1Nwk/e-sederek-bb-26.png",
          "https://i.postimg.cc/pdh79J4q/e-sederek-bb-27.png",
          "https://i.postimg.cc/W4FKDwCW/e-sederek-bb-28.png",
          "https://i.postimg.cc/W4By0JPd/e-sederek-bb-29.png",
          "https://i.postimg.cc/6QkPCGN7/e-sederek-bb-30.png",

        ],
      },
      {
        id: 4,
        name: "Sanan Asadzade MMC",
        slug: "sananAsadzade",
        images: [
          "https://i.postimg.cc/mDVQB0jq/sanan-asadzade-brandbook-14.png",
          "https://i.postimg.cc/gjJ3JNB3/sanan-asadzade-brandbook-15.png",
          "https://i.postimg.cc/7h6S6mQq/sanan-asadzade-brandbook-16.png",
          "https://i.postimg.cc/V64jm34Y/sanan-asadzade-brandbook-17.png",
          "https://i.postimg.cc/tJTFT2vL/sanan-asadzade-brandbook-18.png",
          "https://i.postimg.cc/90MyMJNX/sanan-asadzade-brandbook-19.png",
          "https://i.postimg.cc/SRscsDtR/sanan-asadzade-brandbook-20.png",
          "https://i.postimg.cc/rsPxtxvz/sanan-asadzade-brandbook-21.png",
          "https://i.postimg.cc/4ySVhVrh/sanan-asadzade-brandbook-22.png",
          "https://i.postimg.cc/Gt5GsGZD/sanan-asadzade-brandbook-23.png",
          "https://i.postimg.cc/pVGD7Mp8/sanan-asadzade-brandbook-24.png",
          "https://i.postimg.cc/3JkgQfvS/sanan-asadzade-brandbook-25.png",
        ],
      },
      {
        id: 5,
        name: "MV",
        slug: 'mv',
        images: [
          "https://i.postimg.cc/vTZZfm96/MV-Guideline-01.png",
          "https://i.postimg.cc/mkp2wGNN/MV-Guideline-02.png",
          "https://i.postimg.cc/mkp2wGNS/MV-Guideline-03.png",
          "https://i.postimg.cc/fyqTKhjB/MV-Guideline-04.png",
          "https://i.postimg.cc/kGYXcdFw/MV-Guideline-05.png",
          "https://i.postimg.cc/SQgsqWFJ/MV-Guideline-06.png",
          "https://i.postimg.cc/xj6CYKDq/MV-Guideline-07.png",
          "https://i.postimg.cc/h42jg9WV/MV-Guideline-08.png",
          "https://i.postimg.cc/7YbLLfw7/MV-Guideline-09.png",
          "https://i.postimg.cc/TYhPPpfk/MV-Guideline-10.png",
          "https://i.postimg.cc/Gh9ppHd6/MV-Guideline-11.png",
          "https://i.postimg.cc/8z6Ph9Fh/MV-Guideline-12.png",
          "https://i.postimg.cc/2SZ84Mqb/MV-Guideline-13.png",
          "https://i.postimg.cc/MpQKyNcj/MV-Guideline-14.png",
          "https://i.postimg.cc/d0cQn6dd/MV-Guideline-15.png",
          "https://i.postimg.cc/RFMSx0gF/MV-Guideline-16.png",
        ]
      }
    ],
  },
  {
    id: 2,
    serviceName: "Sosial Media Postları",
    serviceImage: sm,
    works: [
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
            id: 567,
            images: ["https://i.postimg.cc/YCxrp4Db/13.png"],
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
            ],
          },
          {
            id: 567,
            images: ["https://i.postimg.cc/Gphc9c6f/15.png"],
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
            ],
          },
          {
            id: 66678,
            images: [
              "https://i.postimg.cc/6Qx7PyNW/changan-qiyuan.png",
              "https://i.postimg.cc/QMZBzHrc/changan-uni-z.png",
              "https://i.postimg.cc/QMZBzHrp/honda.png",
              "https://i.postimg.cc/6Qx7PyNr/song-plus.png",
              "https://i.postimg.cc/pdM9Spt8/standart-suv.png",
            ],
          },
          {
            id: 34567890,
            images: [
              "https://i.postimg.cc/KvKRvnGn/avatr-06.png",
              "https://i.postimg.cc/J49tyG0Z/bazar.png",
              "https://i.postimg.cc/bNKdGsrS/lynk-co-07.png",
              "https://i.postimg.cc/rFvzdKst/lynk-co-900.png",
              "https://i.postimg.cc/Kvd4KRjT/zeekr-x.png",
            ],
          },
          {
            id: 23456789,
            images: [
              "https://i.postimg.cc/0yR2kFHx/premium-cov.png",
              "https://i.postimg.cc/cLy4x25N/lixiang.png",
              "https://i.postimg.cc/GmF3HKZd/lynk-co.png",
              "https://i.postimg.cc/CxGMz7WF/VOYAH-FREE.png",
              "https://i.postimg.cc/GmF3HKZb/ZEEKR.png",
            ],
          },
          {
            id: 23456789,
            images: [
              "https://i.postimg.cc/2S7qPCjc/sedan-cov.png",
              "https://i.postimg.cc/6pf7DB6Z/avatr-06.png",
              "https://i.postimg.cc/T3JyZT2S/mazda.png",
              "https://i.postimg.cc/s2fBzb1K/sonata.png",
              "https://i.postimg.cc/Ls4qSGhN/zeekr.png",
            ],
          },
          {
            id: 34567890,
            images: [
              "https://i.postimg.cc/25X5D6sW/zeekr-cover.png",
              "https://i.postimg.cc/3wwwVpcD/ZEEKR-001.png",
              "https://i.postimg.cc/W4f4v3Bd/ZEEKR-007.png",
              "https://i.postimg.cc/q7Z7TRPh/ZEEKR-7X.png",
              "https://i.postimg.cc/pd1dHTwF/ZEEKR-X.png",
            ],
          },
          {
            id: 456789,
            images: [
              "https://i.postimg.cc/gkdm18xS/offroad-cover.png",
              "https://i.postimg.cc/xjL9st1p/deepal.png",
              "https://i.postimg.cc/tCyp8Wsf/haval.png",
              "https://i.postimg.cc/c4Z0PwKq/jetour.png",
              "https://i.postimg.cc/J4mMSZsd/leopard.png",
              "https://i.postimg.cc/nckpxr78/rox01.png",
            ],
          },
          {
            id: 234567890,
            images: [
              "https://i.postimg.cc/Jh031s2x/cover.png",
              "https://i.postimg.cc/NMr1HWYk/geely.png",
              "https://i.postimg.cc/gjF3qNkS/tesla.png",
              "https://i.postimg.cc/4ykpbBNF/xiaomi.png",
              "https://i.postimg.cc/ZnbsxbRS/jetour.png",
            ],
          },
          {
            id: 34567890,
            images: [
              "https://i.postimg.cc/kXDfJhR4/cover1.png",
              "https://i.postimg.cc/qMgjJZ6c/cs55.png",
              "https://i.postimg.cc/sD1wj0G4/eado.png",
              "https://i.postimg.cc/BQtMSwPM/qiyuan.png",
              "https://i.postimg.cc/rFzQVYRg/uniz.png",
            ],
          },
          {
            id: 4567890,
            images: [
              "https://i.postimg.cc/d0W9c2QW/eclass.png",
              "https://i.postimg.cc/RCJL2JkP/MERCEDES-COVER.png",
              "https://i.postimg.cc/RCJL2Jk7/s-class.png",
              "https://i.postimg.cc/HxqXT3qM/c-class.png",
            ],
          },
          {
            id: 3456789,
            images: [
              "https://i.postimg.cc/rsqyGrx6/byd.png",
              "https://i.postimg.cc/QCS8fdJx/changan-cs55.png",
              "https://i.postimg.cc/j2vxMS4R/econom-suv.png",
              "https://i.postimg.cc/T1Qdt3JD/geely.png",
              "https://i.postimg.cc/SRVSgxfC/HONDA.png",
              "https://i.postimg.cc/GtzLXmxQ/toyota.png",
            ],
          },
          {
            id: 23456789,
            images: [
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
            ],
          },
        ],
      },
      {
        id: 172,
        company: "Tripsee",
        year: "2025",
        posts: [
          {
            id: 987,
            images: [
              "https://i.postimg.cc/xdJ9LsTx/1.jpg",
              "https://i.postimg.cc/ZqBJ6f5k/2.jpg",
              "https://i.postimg.cc/zfbqTdXs/3.jpg",
              "https://i.postimg.cc/XvGn927m/4.jpg",
              "https://i.postimg.cc/VNrzX7LT/5.jpg",
            ],
          },
          {
            id: 98765,
            images: [
              "https://i.postimg.cc/L6xSwdJx/1.png",
              "https://i.postimg.cc/rFfT36dT/2.png",
              "https://i.postimg.cc/15vS2xgQ/3.png",
              "https://i.postimg.cc/3JthVMyM/4.png",
              "https://i.postimg.cc/CLc0XyZp/5.png",
              "https://i.postimg.cc/NfdtShys/6.png",
              "https://i.postimg.cc/nc3xg8sH/7.jpg",
            ],
          },
          {
            id: 8765,
            images: [
              "https://i.postimg.cc/Kv8Sn90L/1.png",
              "https://i.postimg.cc/fTRnxH8H/2.png",
              "https://i.postimg.cc/vHZFWP0C/3.png",
              "https://i.postimg.cc/3JfM9gqn/4.png",
              "https://i.postimg.cc/sDHFKpLH/5.png",
              "https://i.postimg.cc/WbYRSMyf/6.png",
            ],
          },
          {
            id: 678,
            images: [
              "https://i.postimg.cc/yxrfhTNf/misir-1.png",
              "https://i.postimg.cc/FznPbxR5/misir-2.png",
              "https://i.postimg.cc/SQZtpmGx/misir-3.png",
              "https://i.postimg.cc/mk6d3SDG/misir-4.png",
              "https://i.postimg.cc/HnPS0tLq/misir-5.png",
            ],
          },
          {
            id: 876,
            images: [
              "https://i.postimg.cc/m2vjbk1S/1.png",
              "https://i.postimg.cc/FH0Z1v0G/2.png",
              "https://i.postimg.cc/XY98XW98/3.png",
              "https://i.postimg.cc/nhqkMxq1/4.png",
              "https://i.postimg.cc/6pC0TKCc/5.png",
              "https://i.postimg.cc/VkXR5wXV/6.png",
            ],
          },
          {
            id: 778,
            images: [
              "https://i.postimg.cc/2SyTrXxb/ismayilli-1.jpg",
              "https://i.postimg.cc/RZYdFQPf/ismayilli-2.png",
              "https://i.postimg.cc/YCPR9fXY/ismayilli-3.png",
              "https://i.postimg.cc/pLSCTY0n/ismayilli-4.png",
              "https://i.postimg.cc/Bnzp6chP/ismayilli-5.png",
              "https://i.postimg.cc/cLzhHMDR/ismayilli-6.jpg",
              "https://i.postimg.cc/Vkhg6B7B/ismayilli-7.jpg",
            ],
          },
          {
            id: 769,
            images: [
              "https://i.postimg.cc/Cx4ZrF8D/afreym-afreym-vendxam.png",
              "https://i.postimg.cc/QMxFRRks/castle-2.png",
              "https://i.postimg.cc/BvYjsMM9/riverinn-heftesonu-1.png",
            ],
          },
          {
            id: 9876,
            images: [
              "https://i.postimg.cc/YCF1Lk5S/gurcu1.png",
              "https://i.postimg.cc/T3br5Gzy/gurcu2.png",
              "https://i.postimg.cc/pLjD5xwy/gurcu3.png",
              "https://i.postimg.cc/bwnQS87r/gurcu4.png",
              "https://i.postimg.cc/TYpjGnQC/gurcu-5.png",
            ],
          },
          {
            id: 6666,
            images: [
              "https://i.postimg.cc/GtcCGcgm/baki-1.png",
              "https://i.postimg.cc/bYT88tdh/baki-2.png",
              "https://i.postimg.cc/SQrqqMj2/baki-3.png",
              "https://i.postimg.cc/ryJccrzV/baki-4.png",
              "https://i.postimg.cc/DfgFFXmm/baki-5.png",
              "https://i.postimg.cc/Kv8bY8gk/baki-6.png",
              "https://i.postimg.cc/TY3xP3WQ/baki-7.png",
            ],
          },
          {
            id: 789,
            images: [
              "https://i.postimg.cc/G2XMgdhY/seki-1.png",
              "https://i.postimg.cc/VsHGjfVB/seki-2.png",
              "https://i.postimg.cc/pV1GDW6Q/seki-3.png",
              "https://i.postimg.cc/qBZb8J5y/seki-4.png",
              "https://i.postimg.cc/7hcKD9zD/seki-5.png",
            ],
          },
          {
            id: 54,
            images: [
              "https://i.postimg.cc/k5XYQ27m/1.png",
              "https://i.postimg.cc/43LLBX3c/2.png",
              "https://i.postimg.cc/261Htgq6/3.png",
              "https://i.postimg.cc/4dY80jKn/4.png",
              "https://i.postimg.cc/0NWWc9NM/5.png",
            ],
          },
          {
            id: 88,
            images: [
              "https://i.postimg.cc/Y2gRm6QS/shah1.png",
              "https://i.postimg.cc/7P79T3S2/shah3.png",
              "https://i.postimg.cc/3JFZt3SJ/shahdag-2.png",
            ],
          },
          {
            id: 99,
            images: [
              "https://i.postimg.cc/gjnPNMpK/gence-1.png",
              "https://i.postimg.cc/Zn2zgrKm/gence-2.png",
              "https://i.postimg.cc/0jF13p2s/gence-3.png",
              "https://i.postimg.cc/yxtC5FY0/gence-4.png",
              "https://i.postimg.cc/WzCcKMbq/gence-5.png",
              "https://i.postimg.cc/wxGz7d5r/gence-6.png",
              "https://i.postimg.cc/VsVwdcBm/gence-7.png",
              "https://i.postimg.cc/CMQ0zVHh/gence-8.png",
            ],
          },
          {
            id: 787,
            images: [
              "https://i.postimg.cc/5yY269X0/Lerik-1.png",
              "https://i.postimg.cc/zvsXWmhh/lerik-2.png",
              "https://i.postimg.cc/cCgLr1vc/lerik-3.png",
              "https://i.postimg.cc/5yhNvczL/lerik-4.png",
              "https://i.postimg.cc/ZnGK3kNc/lerik-5.png",
              "https://i.postimg.cc/jqmjBf12/lerik-6.png",
              "https://i.postimg.cc/9XKfs9k4/lerik-7.png",
            ],
          },
          {
            id: 654,
            images: [
              "https://i.postimg.cc/wTY17Jk6/qebele-1.png",
              "https://i.postimg.cc/fRwkvNph/qebele-10.png",
              "https://i.postimg.cc/3xKWZTV7/qebele-11.png",
              "https://i.postimg.cc/CxFd4gXw/qebele-12.png",
              "https://i.postimg.cc/MpWXYSNW/qebele-13.png",
              "https://i.postimg.cc/Nf85TMNm/qebele-2.png",
              "https://i.postimg.cc/4Nvmtd8v/qebele-3.png",
              "https://i.postimg.cc/L6knfXyt/qebele-4.png",
              "https://i.postimg.cc/dtRLd1WB/qebele-5.png",
              "https://i.postimg.cc/SxyjGh5W/qebele-6.png",
              "https://i.postimg.cc/8z1sbS3b/qebele-7.png",
              "https://i.postimg.cc/CxFd4gtv/qebele-8.png",
              "https://i.postimg.cc/T3Rhc6SN/qebele-9.png",
            ],
          },
        ],
      },
      {
        id: 72,
        company: "Saat store",
        year: "2025",
        posts: [
          {
            id: 999,
            images: [
              "https://i.postimg.cc/wvQc2Qws/1.jpg",
              "https://i.postimg.cc/mkZ351nw/2.jpg",
              "https://i.postimg.cc/90XPnwkb/3.jpg",
              "https://i.postimg.cc/sxfPNGL4/4.jpg",
              "https://i.postimg.cc/BbZ5VPzC/5.jpg",
              "https://i.postimg.cc/L54kbgWC/6.jpg",
            ],
          },
          {
            id: 909,
            images: [
              "https://i.postimg.cc/bJy2ycRz/1.png",
              "https://i.postimg.cc/gJz6zFKv/2.png",
              "https://i.postimg.cc/FRrJr5x0/3.png",
              "https://i.postimg.cc/Qt8W8Gq1/4.png",
              "https://i.postimg.cc/rmVtVX91/5.png",
              "https://i.postimg.cc/k4TRD1jF/6.png",
            ],
          },
          {
            id: 865,
            images: [
              "https://i.postimg.cc/sDkQBZJ0/1.jpg",
              "https://i.postimg.cc/TYzLyW98/2.jpg",
              "https://i.postimg.cc/zXsbLRjZ/3.jpg",
            ],
          },
          {
            id: 9876,
            images: [
              "https://i.postimg.cc/66STSGFr/1.png",
              "https://i.postimg.cc/WbktP1PW/2.jpg",
              "https://i.postimg.cc/rFrzLwLH/3.png",
            ],
          },
          {
            id: 78,
            images: [
              "https://i.postimg.cc/Bt9Sv2Gr/1.jpg",
              "https://i.postimg.cc/F15rK04X/2.jpg",
              "https://i.postimg.cc/V5QfNX8c/3.jpg",
            ],
          },
          {
            id: 456,
            images: [
              "https://i.postimg.cc/zByHbw9h/1.jpg",
              "https://i.postimg.cc/FRwdjd4K/2.jpg",
              "https://i.postimg.cc/C19BjBg1/3.jpg",
            ],
          },
          {
            id: 3456,
            images: [
              "https://i.postimg.cc/sDYQhg0W/1.jpg",
              "https://i.postimg.cc/pXfhFL1f/2.jpg",
              "https://i.postimg.cc/c4RgnL57/3.jpg",
            ],
          },
        ],
      },
      {
        id: 1,
        company: "E-sederek",
        year: "2025",
        posts: [
          {
            id: 1,
            images: ["https://i.postimg.cc/sXvxbyq1/1.png"],
          },
          {
            id: 333,
            images: ["https://i.postimg.cc/mZ1hwL75/2.png"],
          },
          {
            id: 3353,
            images: ["https://i.postimg.cc/C581L7FZ/3.png"],
          },
          {
            id: 3353,
            images: ["https://i.postimg.cc/ryRzJV5b/6.png"],
          },
          {
            id: 4453,
            images: ["https://i.postimg.cc/NfhFC3xS/7.png"],
          },
          {
            id: 3653,
            images: ["https://i.postimg.cc/NfhFC34F/8.png"],
          },
          {
            id: 53,
            images: ["https://i.postimg.cc/PrmxgS39/9.png"],
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
            id: 555,
            images: ["https://i.postimg.cc/K8jLL2XN/2.jpg"],
          },
          {
            id: 1,
            images: ['https://i.postimg.cc/HsNPwYVx/3.png']
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
            id: 777,
            images: ["https://i.postimg.cc/SxP9fvkS/5.png"],
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
    ],
  },
  {
    id: 3,
    serviceName: "",
    serviceImage: motion,
    works: [
      {
        id: 3,
        company: "Motion dizaynlar",
        year: "",
        posts: [
          {
            id: 995,
            images: [
              "https://files.catbox.moe/n1kylw.mp4",
            ]
          },
          {
            id: 919,
            images: [
              "https://files.catbox.moe/w4cqs6.mp4",
            ],
          },
          {
            id: 929,
            images: [
              "https://files.catbox.moe/x1kh5c.mp4",
            ],
          },
          {
            id: 399,
            images: [
              "https://files.catbox.moe/9l8ydp.mp4",
            ],
          },
          {
            id: 949,
            images: [
              "https://files.catbox.moe/lgg0ly.mp4",
            ],
          },
          {
            id: 959,
            images: [
              "https://files.catbox.moe/2sylto.mp4",
            ],
          },
          {
            id: 9669,
            images: [
              "https://files.catbox.moe/gqs25i.mp4",
            ],
          },
          {
            id: 9769,
            images: [
              "https://files.catbox.moe/tinq8o.mp4",
            ],
          },
          {
            id: 6665,
            images: [
              "https://files.catbox.moe/qevgwb.mp4",
            ],
          },
          {
            id: 9944,
            images: [
              "https://files.catbox.moe/q7w1bt.mp4",
            ],
          },
          {
            id: 9933,
            images: [
              "https://files.catbox.moe/q0rhg4.mp4",
            ],
          },
          {
            id: 9955,
            images: [
              "https://files.catbox.moe/ug1p6h.mp4",
            ],
          },
          {
            id: 9943,
            images: [
              "https://files.catbox.moe/o90mqj.mp4",
            ],
          },
          {
            id: 9941,
            images: [
              "https://files.catbox.moe/ip6cb1.mp4",
            ],
          },
          {
            id: 9911,
            images: [
              "https://files.catbox.moe/5h0js0.mp4",
            ],
          },
          {
            id: 9912,
            images: [
              "https://files.catbox.moe/xqdpyp.mp4",
            ],
          },
          {
            id: 9923,
            images: [
              "https://files.catbox.moe/38ir22.mp4",
            ],
          },
          {
            id: 9945,
            images: [
              "https://files.catbox.moe/24qag2.mp4",
            ],
          },
          {
            id: 9954,
            images: [
              "https://files.catbox.moe/ep7m3w.mp4",
            ],
          },
          {
            id: 9922,
            images: [
              "https://files.catbox.moe/uvu0vs.mp4",
            ],
          },
          {
            id: 9932,
            images: [
              "https://files.catbox.moe/oepv92.mp4",
            ],
          },
          {
            id: 9921,
            images: [
              "https://files.catbox.moe/7b2rcm.mp4",
            ],
          },
        ]
      }
    ],

  },
  {
    id: 4,
    serviceName: "Çap Məhsulları",
    serviceImage: print,
    isPrint: true,
    print: [
      {
        id: 1,
        images: [print2],
        name: "",
        slug: ""
      },
    ],
  },
];
