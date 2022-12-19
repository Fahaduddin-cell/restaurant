import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Indivisual = () => {
  const [resTaurant, setRestaurant] = useState(null);

  const [fruits, setFruits] = useState([]);

  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    setRestaurant(location?.state?.find((ind) => ind.id == params.id));
  }, [params.id]);

  const callApi = () => {
    fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
      .then((res) => res.json())
      .then((data) => setFruits(data.recipes));
  };

  // image_url

  // publisher

  // publisher_url

  // recipe_id

  // social_rank

  // source_url

  // title

  return (
    <>
      <section className="IndivisualBg p-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow1">
                <div className="card-body">
                  <h2>{resTaurant && resTaurant.name}</h2>
                  <img
                    // width="200px"
                    height="500px"
                    className="card-img-top"
                    src={resTaurant && resTaurant.img_url}
                    alt=""
                  />
                  <div className="d-flex mt-3">
                    <h4 className="">
                      <span>
                        <i class="fa-solid fa-location-pin mr-1 text-dark"></i>
                      </span>
                      {resTaurant && resTaurant.address.street}
                    </h4>
                    <h4 className="ml-2">
                      {resTaurant && resTaurant.address.city}
                    </h4>
                    <h4 className="ml-2">
                      {resTaurant && resTaurant.address.pncode}
                    </h4>
                  </div>

                  <h4>
                    <span>
                      <i className="fa-solid fa-phone mr-1 text-primary"></i>
                    </span>
                    {resTaurant && resTaurant.phone}
                  </h4>
                  <h4>
                    <span>
                      <i class="fa-sharp fa-solid fa-clock mr-1 text-info"></i>
                    </span>
                    {resTaurant && resTaurant.timing}
                  </h4>

                  <div className="text-center mt-4">
                    <button
                      onClick={callApi}
                      className="btn btn-outline-primary"
                    >
                      See restaurant dishes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="IndivisualBg p-2">
        <div className="container">
          <div className="row">
            {fruits.map((item, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="card mt-4 shadow">
                    <div className="card-body">
                      <img
                        height="240px"
                        className="card-img-top mb-2"
                        src={item.image_url}
                        alt=""
                      />
                      <h3>{item.title.slice(0, 15)}</h3>
                      <p>Rank: {item.social_rank}</p>
                      <p>Publisher: {item.publisher}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Indivisual;
