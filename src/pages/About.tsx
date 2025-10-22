import { useNavigate } from "react-router-dom"
import AboutHero from "../components/AboutSection/AboutHero"
import Collaboration from "../components/AboutSection/Collaboration"
import ExpirenceSection from "../components/AboutSection/ExpirenceSection"
import SkillSection from "../components/AboutSection/SkillSection"
import SliderComponent from "../components/SliderComponent"

const data=[
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA",
  "PƏRVİN QASIMOVA"
]
const About = () => {
  const navigate=useNavigate();
  return (
    <div>
     <AboutHero/>
     <SkillSection/>
     <ExpirenceSection/>
     <Collaboration/>
     <SliderComponent onClick={()=>{navigate("/about")}} data={data}  className='bg-none ' textStyle='text-4xl font-bold text-gray-400'/>
    </div>
  )
}

export default About
