
import SliderComponent from '../SliderComponent';

// CSS importları
// import "swiper/css";
const data=[
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA"
]
const data2=[
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA"
]
const NameSlide = () => {
  return (
     <div className="w-full animate-in-fade-up">
      <SliderComponent data={data2}  className='bg-none ' textStyle='text-4xl font-bold text-gray-300 dark:text-white font-poppins font-semibold '/>
    <SliderComponent data={data}  className='bg-none ' textStyle='text-4xl font-bold text-black dark:text-white font-poppins font-semibold'/>
    </div>
  )
}

export default NameSlide
