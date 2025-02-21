import "./Felx_image.css"
import img from "../../assets/image.jpg"

const Felx_image=()=>{
    return(
        <>
        <div className="felx_image">
            <div className="felx_image_maxwidth">
            <img src={img} style={{width:"100%", height:"100%" ,borderRadius:"20px",}}/>
            </div>
        </div>
        </>
    )
}
export default Felx_image