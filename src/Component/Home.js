import Header from "./Header"
let url = "https://wallpapercave.com/wp/wp8436020.jpg"

function Home (){
    return(
        <div>
            <Header></Header> 
            <h1 className="bg-gray-500 text-bold text-center text-white text-6xl p-10 m-5">Welcome to The Bank of Spain</h1>
            <img src={url}></img>
       </div>
    )
};
export default Home