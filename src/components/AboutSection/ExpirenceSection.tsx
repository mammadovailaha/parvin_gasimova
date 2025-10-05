
import AboutBtns from "./AboutBtns"
import ExprinceList from "./ExprinceList"


const ExpirenceSection = () => {
  return (
    <div className="flex justify-center items-center gap-5 w-full my-20">
     <div className="flex flex-col justify-center items-center gap-22 w-full md:flex-row">
        <AboutBtns />
        <ExprinceList />
     </div>
    </div>
  )
}

export default ExpirenceSection
