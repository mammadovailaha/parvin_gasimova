import mainPhoto from "../../assets/images/pp about.png";

const AboutHero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2.5 md:gap-8 w-full p-4 md:p-10 mt-15 ">
      <div className="flex justify-around items-center gap-2.5 md:gap-5">
        <div className="w-[42%] md:[40%] lg:w-[45%] flex flex-col gap-4">
          <p className="font-normal font-poppins text-[9px] leading-2.5 md:leading-8 md:text-2xl text-[#1E1E1E]">
            <b className="font-poppins font-semibold">Salam! Mən Pərvin Qasımova, qrafik dizaynerəm. </b>Artıq 2 ildir bu
            sahədə çalışıram və yalnız qrafik dizaynla məhdudlaşmıram — eyni
            zamanda motion dizayner kimi də fəaliyyət göstərirəm. <br />
            Brendlərə fərqli sosial media postları, axıcı motion dizaynlar, çap
            məhsulları və brend kimliyini yaradıram. Hər layihədə məqsədim
            brendlərin vizual dilini gücləndirmək, mesajını düzgün çatdırmaq və
            estetik, yadda qalan nəticələr yaratmaqdır. 
          </p>
        </div>
        <div className="w-[140px]  md:w-[55%] lg:w-[30%] h-[140px] md:h-[250px] lg:h-[440px] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={mainPhoto}
            loading="lazy"
            alt="Peşəkar Qrafik Dizayner"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
