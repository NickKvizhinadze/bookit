import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RoomItem } from "./rooms/roomItem";

const Home = () => {
  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    toast.error(error);
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms && rooms.length > 0 ? (
          rooms.map((room) => <RoomItem key={room.id} room={room} />)
        ) : (
          <div className="alert alert-danger">
            <b>No Rooms.</b>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
