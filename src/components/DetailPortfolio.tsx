import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import WorkCard from "./WorkCard";
import type { Work } from "../types/portfolio";

const DetailPortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const portfolio = portfolioData.find((item) => item.id === Number(id));

  if (!portfolio) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Geri qayıt
        </button>
      </div>
    );
  }

  // Əgər branding-dirsə, branding list-i göstər
  if (portfolio.isBranding && portfolio.brandings) {
    return (
      <div className="w-full bg-white mt-20 pb-20">
        <button
          onClick={() => navigate("/portfolio")}
          className="fixed top-4 left-4 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition z-20"
        >
          ← Geri
        </button>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-black mb-12 text-center">
            {portfolio.serviceName}
          </h1>

          {portfolio.brandings.length === 0 ? (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">Brendbook işləri yoxdur</p>
            </div>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
              {portfolio.brandings.map((branding) => (
                <div
                  key={branding.id}
                  onClick={() => navigate(`/portfolio/branding/${branding.slug}`)}
                  className="cursor-pointer group rounded-lg overflow-hidden border border-gray-200"
                >
                  {branding.images && branding.images.length > 0 && (
                    <div className="w-[100%] h-[320px] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={branding.cover}
                        alt={branding.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-black group-hover:text-gray-700">
                      {branding.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  else if (portfolio.isPrint && portfolio.print){
    return(
      <div className="w-full flex flex-col items-center gap-5 mt-10">
        <div className="w-full">
          {portfolio.print.map((item)=>(
            <div className="w-full h-full">
              <img className="w-full h-full object-contain" src={item.images[0]} alt="çap dizayn" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white mt-20 pb-20">
      <button
        onClick={() => navigate("/portfolio")}
        className="fixed top-4 left-4 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition z-20"
      >
        ← Geri
      </button>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {portfolio.works && portfolio.works.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-xl font-poppins font-normal">
              Bu kategoriyada hələ işlər yoxdur
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-16 w-full">
            {portfolio.works?.map((work) => (
              <div key={work.id}>
                {/* Şirkət başlığı */}
                <div className="w-full flex justify-between items-center py-3">
                  <h1 className="text-sm md:text-2xl font-poppins font-normal text-black">
                    {portfolio.serviceName}
                  </h1>
                  <div className="px-5 py-2 rounded-[30px] bg-[#aeff00] border flex justify-center items-center whitespace-nowrap">
                    <h2 className="text-sm md:text-2xl font-poppins font-semibold leading-lg text-black">
                      {work.company}
                    </h2>
                  </div>
                </div>

                {/* Əgər posts varsa, hər post üçün kart */}
                {work.posts && work.posts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {work.posts.map((post, postIndex) => {
                      const postWork: Work = {
                        id: post.id,
                        company: `${work.company} - Post ${postIndex + 1}`,
                        year: work.year,
                        images: post.images,
                      };
                      return <WorkCard key={post.id} work={postWork} />;
                    })}
                  </div>
                ) : (
                  /* Əgər posts yoxsa, birbaşa images slider */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <WorkCard work={work} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPortfolio;