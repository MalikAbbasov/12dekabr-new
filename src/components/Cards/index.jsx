import React from 'react'
import "./cards.scss"
function Cards() {
    return (
        <div>
            <section id='cards'>
                <div className="container">
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />
                        <div className="card_text">
                            <h4>Women</h4>
                            <p>Spring 2018</p>
                        </div>

                        <div className="card_hover">
                            <h5>Shop Now <div className="card_hover_line"></div></h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" />
                        <div className="card_text">
                            <h4>Men</h4>
                            <p>Spring 2018</p>
                        </div>

                        <div className="card_hover">
                            <h5>Shop Now <div className="card_hover_line"></div></h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp" alt="" />
                        <div className="card_text">
                            <h4>Accessories</h4>
                            <p>New Trend</p>
                        </div>

                        <div className="card_hover">
                            <h5>Shop Now <div className="card_hover_line"></div></h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cards