import Cardcontainer from "./Cardcontainer"

const Body=() => {
    return(
<>
         <div>This is body Component</div>
         <div className="mx-10">
            <div>Carousel Component</div>
            <div className="flex justify-between">
            <div>SearchBar</div>
            <div>Filter</div>
            </div>
            <Cardcontainer/>

         </div>

</>
    )
}
export default Body