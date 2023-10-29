import Image from "next/image"
import { ImageRow1, ImageRow2, ImageRow3 } from "./microComponents/images"

const Intermission = () => {
  return (
    <div className="intermission">
      <div className="image-row">
        <Image src={ImageRow1} alt="" />
      </div>
      <div className="image-row _2">
        <Image src={ImageRow2} alt="" />
      </div>
      <div className="image-row _2">
        <Image src={ImageRow3} alt="" />
      </div>
    </div>
  )
}

export default Intermission
