import React from 'react'
import "./navbar.scss"

function Navbar() {


    const handleBasket = () => {
        document.querySelector(".basket").classList.toggle("activ")
    }

  return (
    <div>
        <nav id='navbar'>
            <div className="container">
                <div className="left">
                    <div className="left_image">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
                    </div>
                    <div className="left_pages">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Features <sup className='sup'>Hot</sup></li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i onClick={handleBasket} class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar