import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Restaurant = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("Restaurant.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const cardHandeler = (id) => {
    navigate(`/indivisual/${id}`, {
      state: info,
    });
  };

  return (
    <>
      <section className="restaurantBg p-4">
        <div className="container"></div>
        <div className="row">
          {info.map((item, index) => {
            return (
              <div key={index} className="col-md-4">
                <div
                  onClick={() => cardHandeler(item.id)}
                  className="card restaurantCard mt-4 shadow"
                >
                  <div className="card-body">
                    <img
                      className="card-img-top mb-2"
                      width="300px"
                      height="240px"
                      src={item.img_url}
                      alt=""
                    />

                    <h4>{item.name}</h4>
                    <p>{item.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Restaurant;
