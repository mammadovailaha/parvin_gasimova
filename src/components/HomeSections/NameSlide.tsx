
import SliderComponent from '../SliderComponent';

// CSS importları
// import "swiper/css";
const data=[
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA"
]
const NameSlide = () => {
  return (
     <div className="w-full ">
      <SliderComponent data={data}  className='bg-none ' textStyle='text-4xl font-bold text-gray-300 dark:text-white'/>
    <SliderComponent data={data}  className='bg-none ' textStyle='text-4xl font-bold text-black dark:text-white'/>
    </div>
  )
}

export default NameSlide
