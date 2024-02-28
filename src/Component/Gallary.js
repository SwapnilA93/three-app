import Header from "./Header"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://wallpapercave.com/wp/wp9418472.jpg",
    "https://wallpapercave.com/wp/wp11378810.jpg",
    "https://wallpapercave.com/wp/wp5997082.jpg",
    "https://wallpapercave.com/wp/wp3875881.jpg",
    "https://wallpapercave.com/wp/wp4643136.jpg",
    "https://wallpapercave.com/wp/wp5954398.jpg",
    "https://wallpapercave.com/wp/wp7303546.jpg",
    "https://wallpapercave.com/wp/wp6407504.jpg",
    "https://wallpapercave.com/wp/wp9337103.jpg",
    "https://wallpapercave.com/wp/wp9834686.jpg",
]

function Gallary (){

    

    return(
        <div className="p-10 bg-gray-400">
            <Header></Header> 
           
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block",}}
                            alt=""
                         
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
       </div>
    )
};
export default Gallary