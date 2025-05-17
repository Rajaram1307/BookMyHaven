import Card from "../../Card/Card";
import { useState,useEffect } from "react";
import Loading from "../../Loading/Loading";
const FeaturedRoom = ()=>
{
    const[rooms,setRooms] = useState([]);
    const[loading,setLoading] = useState(true)
      useEffect(()=>
      {
        fetch("https://roombooking-json.onrender.com/FeaturedProduct").
        then(data=>data.json()).
        then(data=> 
            {
                let featuredRoom = data.slice(0,3)
                setRooms(featuredRoom)
                setLoading(false)
            }).
        catch(err =>console.log(err))
      },[])
      if(loading)
      {
        return(
            <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh", // Full viewport height
  }}>
            <Loading/>
            </div>
        )
      }
    return(
        <>
        <div className="header p-5 text-center" >
            <h1>Featured Rooms</h1>
        </div>
        <div className="container-fluid pb-5">
            <div className="row">   
                {
                    rooms.map((data)=>
                    {
                        return(
                            <>
                             <div className="col-12 col-md-4">
                            <Card id={data.id} type = {data.type} price={data.price} image={data.image}/>
                            </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    );
}
export default FeaturedRoom;
