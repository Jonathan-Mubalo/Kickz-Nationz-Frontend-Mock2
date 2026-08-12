import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer2.jsx";
import "../styles/Products.css"


const  Products = () => {

    const logOut = useRef();
   const navigate = useNavigate();


const handleLogOut = () =>{
   
   
    sessionStorage.setItem("login", JSON.stringify({"isLoggedIn":false}));
const access = JSON.parse(sessionStorage.getItem("login"));

    console.log( " Home Page Log out: "+ access.isLoggedIn)

    navigate("/Login")
}

    return (  
<>
<Navbar />
<h1 className="products_h1">Products</h1>
<p className="products_p">Explore our latest collection of premium sneakers</p>
<main className="products_main">
<section className="productsSection">
       <div className="product_image_div"><img className="productImg" src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
<section className="productsSection">
       <div className="product_image_div"><img src="" /></div>
       <h2 className="products_h2">Nike airforce 1</h2>
       <h2 className="products_h2"><span>R1000</span></h2>
       <button className="productsBtn">View product</button>
</section>
</main>
<Footer />
</>
    );
}
 
export default Products;