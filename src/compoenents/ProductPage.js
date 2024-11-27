import React from 'react';
import './productPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productImage from '../utils/productImage.png';
import farmFresh from '../utils/farmFresh.svg';
import noaddedFlavours from '../utils/noaddedFlavours.svg';
import positiveImpact from '../utils/positiveImpact.svg';
import rooted from '../utils/rooted.svg';
import Review from './Review';
import Footer from './Footer';

const ProductPage = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Adjusted to show 3 items at a time for better visibility
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='header'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='productImage'>
                        <img src={productImage} alt="productImage" />
                    </div>
                </div>
                <div>
                    <div className="description">
                        <div className='heading'>
                            <p style={{ fontSize: '5vh' }}>Vegetable and Flower Seeds</p>
                        </div>
                        <div className='productDes'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste perspiciatis eligendi possimus odit culpa illo itaque earum vel, deserunt blanditiis natus vitae rerum magni ipsa enim, quaerat dolorum ipsum! Iure, nisi, sapiente rerum sed iusto, autem ea quas est quaerat magni maxime magnam ratione molestias. Laborum explicabo vitae nulla.
                            </p>
                        </div>
                        <div className='productPrice'>
                            <h1>$199.99</h1>
                        </div>
                        <div className='buyButton'>
                            <button>
                                Buy on amazon
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '30vw', justifyContent: 'space-between', marginTop: '10vh' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90px', alignItems: 'center' }}>
                                <img style={{ width: '90px' }} src={noaddedFlavours} alt="" />
                                <p style={{ fontSize: '16px', fontWeight: '700', textAlign: 'center' }}>No Added Flavours</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90px', alignItems: 'center' }}>
                                <img style={{ width: '90px' }} src={farmFresh} alt="" />
                                <p style={{ fontSize: '16px', fontWeight: '700', textAlign: 'center' }}>Fresh Farm</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90px', alignItems: 'center' }}>
                                <img style={{ width: '90px' }} src={positiveImpact} alt="" />
                                <p style={{ fontSize: '16px', fontWeight: '700', textAlign: 'center' }}>Positive Impact</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90px', alignItems: 'center' }}>
                                <img style={{ width: '90px' }} src={rooted} alt="" />
                                <p style={{ fontSize: '16px', fontWeight: '700', textAlign: 'center' }}>100% Rooted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='review_rating'>
                <div>
                    <h2>Ratings & Reviews</h2>
                </div>
                <div className="slider-container">
                
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default ProductPage;
