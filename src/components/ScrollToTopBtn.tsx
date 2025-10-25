import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // İstəsən ikon əlavə elə, yoxdursa sadəcə text yaz

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-u izləyir, müəyyən məsafədən sonra button görünür
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Yuxarı qayıtma funksiyası
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // animasiyalı qayıtma
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#aeff00] text-white shadow-lg hover:bg-black transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
