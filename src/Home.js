import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23423"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={200}
            image="https://images-na.ssl-images-amazon.com/images/I/61LAI5UX8vL.jpg"
            rating={5}
          />
          <Product
            id="98238"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={150}
            image="https://images-na.ssl-images-amazon.com/images/I/51NRPISnBuL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={3}
          />

          {/* product */}
        </div>
        <div className="home__row">
          <Product
            id="23432"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={250}
            image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="532343"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={559}
            image="https://cdnb.artstation.com/p/assets/images/images/010/528/903/large/junting-chen-.jpg?1524898887"
            rating={3}
          />
          <Product
            id="753553"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={550}
            image="https://images-na.ssl-images-amazon.com/images/I/41i9flWTCpL._SX316_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            id="87577"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam!

"
            price={120}
            image="https://images-na.ssl-images-amazon.com/images/I/812S0-yEPUL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
