import React from "react";

const Home = () => {
  return (
    <>
      <section>
        <div className="">
          <header className="main-header">
            <div className="landing-div">
              <div className="landing-wrapper d-flex flex-column h-100 align-items-center justify-content-center text-center">
                <div
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h5 className="display-4 animated slideInLeft delay-1s">
                        Enjoy Ultimate Food
                        <br /> With Us
                      </h5>
                    </div>

                    <div className="carousel-item">
                      <h5 className="display-4 animated slideInRight delay-1s">
                        Make Tours Amazing
                        <br /> With Tasty Foods
                      </h5>
                    </div>

                    <div className="carousel-item">
                      <h5 className="display-4 animated slideInDown delay-1s">
                        Feel Relaxed In Holidays
                        <br /> With Spicy Food
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section style={{ marginTop: "0px" }} id="" className="p-4 aboutBg">
        <div className="container">
          <h2 className="display-4 mt-2 text-center font-weight-bold">About</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="row P-3">
                <div className="col-md-6">
                  <h3 className="font-weight-bold">Etymology</h3>
                  <p className="">
                    The word derives from early 19th century from French word
                    restaurer 'provide food for', literally 'restore to a former
                    state and, being the present participle of the verb, The
                    term restaurant may have been used in 1507 as a "restorative
                    beverage",
                  </p>
                </div>

                <div className="col-md-6">
                  <h3 className="font-weight-bold">Modern format</h3>
                  <p className="">
                    The earliest modern-format "restaurants" to use that word in
                    Paris were the establishments which served bouillon, a broth
                    made of meat and egg which was said to restore health and
                    vigour. The first restaurant of this kind opened in 1765.
                  </p>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <h3 className="font-weight-bold">Types</h3>
                  <p className="">
                    Restaurants are classified or distinguished in many
                    different ways. The primary factors are usually the food
                    itself (e.g. vegetarian, seafood, steak); the cuisine (e.g.
                    Italian, Korean, Chinese, Japanese, Indian, French, Mexican,
                    Thai) or the style of offering (e.g. tapas bar, a sushi
                    train, a tastet restaurant, a buffet restaurant or a yum cha
                    restaurant).
                  </p>
                </div>

                <div className="col-md-6">
                  <h3 className="font-weight-bold">Restaurant staff</h3>
                  <p className="">
                    A restaurant's proprietor is called a restaurateur, this
                    derives from the French verb restaurer, meaning "to
                    restore". Professional cooks are called chefs, with there
                    being various finer distinctions (e.g. sous-chef, chef de
                    partie). Most restaurants (other than fast food restaurants
                    and cafeterias) will have various waiting staff to serve
                    food,
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="display-4">History</h5>
              <p>
                A public eating establishment similar to a restaurant is
                mentioned in a 512 BC record from Ancient Egypt. It served only
                one dish, a plate of cereal, wild fowl, and onions. A forerunner
                of the modern restaurant is the thermopolium, an establishment
                in Ancient Greece and Ancient Rome that sold and served
                ready-to-eat food and beverages.
              </p>
              <p>
                The Romans also had the popina, a wine bar which in addition to
                a variety of wines offered a limited selection of simple foods
                such as olives, bread, cheese, stews, sausage, and porridge. The
                popinae were known as places for the plebeians of the lower
                classes of Roman society to socialize. While some were confined
                to one standing room only, others had tables and stools and a
                few even had couches.Another early forerunner of the restaurant
                was the inn. Throughout the ancient world, inns were set up
                alongside roads to cater to people traveling between cities,
                offering lodging and food. Meals were typically served at a
                common table to guests. However, there were no menus or options
                to choose from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4  dishesBg ">
        <div className="container homeImg ">
          <h2 className="display-4 text-center font-weight-bold">
            Some Dishes
          </h2>

          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/2089712/pexels-photo-2089712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <img
                    height="220px"
                    className="card-img-top"
                    src="https://images.pexels.com/photos/1460873/pexels-photo-1460873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
