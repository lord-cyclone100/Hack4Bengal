import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { BACKEND_URL } from "../App";

const images = [
  "./background1.jpg",
  "./background2.jpg",
  "./background3.jpg",
  "./background4.jpg"
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dat,setDat] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    getDetails();
  },[]);

  const getDetails = async() => {
    try{
      const response = await fetch(`${BACKEND_URL}/all-tournaments`,{method:"GET"})
      if(response.ok){
        console.log(response);
        const data = await response.json();
        console.log(data.message)
        setDat(data.message);
        // return data2;
      }
    }
    catch(error){
      console.error(error);  
    }
  }
  


  return (
    <>
      <div className=" relative bg-cover bg-center h-dvh w-full transition-all duration-1000 ease-in-out top-5" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className='relative z-5'>
          {/* <Navbar /> */}
          <div className='flex flex-col gap-8 pl-40 pt-20'>
            <div className='font-game2 text-9xl'>
              <h1>Get Ready To</h1>
              <h1>Play, Explore</h1>
              <h1>and Conquer</h1>
            </div>
            <div className='font-game text-lg'>
              <p>Embark on your gaming journey of discovery and excitement</p>
              <p>right here, where the world of immersive gameplay</p>
            </div>
            <button class="btn btn-primary w-1/6">Explore</button>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap px-40 items-center justify-between gap-10'>
        {
          dat.map((curItem)=>{
            return <Card key={curItem._id} val={curItem}/>
          })
        } 
      </div>
    </>
  );
};