import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className= 'home__container'>
                <img
                className="home__image"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />

                 <div className="home__row">
                     {/* 2 products */}
                     <Product id="4903850" title="The lean startup: How constant innovation creates radically successfu business paperback" price={69.99} rating={2} image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" />
                     <Product id="4903850" title="Kenwood KM020 Titanium Major Stand Mixer 220-240 Volt/ 50-60Hz INTERNATIONAL VOLTAGE & PLUG FOR OVERSEAS USE ONLY WILL NOT WORK IN THE US, OUR PRODUCT" price={269.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/41hbQSkaNxL._AC_.jpg" />
                     


                 </div>
                 <div className="home__row">
                     {/* 3 products */}
                     <Product id="4903850" title="Samsung curved led Monitor" price={169.99} rating={4} image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg" />
                     <Product id="23445930" title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal" price={169.99} rating={4} image="https://m.media-amazon.com/images/I/618b7IUpXHL._AC_UY218_.jpg" />
                     <Product id="3254354345" title="New apple ipadd Pro" price={569.99} rating={5} image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg" />

                     
                 </div>
                 <div className="home__row">
                     {/* 1 products */}
                     <Product id="90829332" title="2021 Portable Laptop Stand - Lightweight & Durable - Robust Plastic & Metal Design - for All Laptops 11-17" price={1169.99} rating={4} image="https://m.media-amazon.com/images/I/81Wol76Tr4L._AC_UY218_.jpg" />

                     
                 </div>
            </div>

        </div>
    )
}

export default Home
