import img from "./ironmen.jpg";
import img2 from "./thorr.jpg";

const Image = ()=>{
  return(
    <>
    <img src={img} style={{width:"500px" , height:"500px"}}/>
    <img src={img2} style={{width:"500px" , height:"500px"}}/>
    <img src="ram.jpg" />
    </>
  )
}


export default Image