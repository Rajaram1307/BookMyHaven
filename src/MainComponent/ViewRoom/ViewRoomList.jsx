import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewRoom from "./ViewRoom";
import Loading from "../../Loading/Loading";
const ViewRoomList = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const[loading,setLoading] = useState(true);

   useEffect(() => {
  fetch("https://roombooking-json.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched data:", data);
    const item = data.find(data => id == parseInt(data.id));
      console.log("Found item:", item);
      setRoom(item);
      setLoading(false);
    })
    .catch((err) => console.error("Fetch error:", err));
}, [id]);

  if (loading) {
    return (
       <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }}>
      <Loading/>
      </div>
    )
  }

  return (
    <>
      <ViewRoom
        img={room.image}
        preimg1={room.preview1}
        preimg2={room.preview2}
        preimg3={room.preview3}
        details={room.details}
        price={room.price}
        size={room.size}
        capacity={room.capacity}
        pet={room.pet}
        extra={room.extra}
      />
    </>
  );
};

export default ViewRoomList;
