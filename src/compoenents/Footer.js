import React from 'react'
import Pri_Logo from '../utils/Pri_Logo.png'
import './productPage.css';
const Footer = () => {
    return (
        <div>
            <div className='footer-head' style={{}}>
                <div >
                    <img src={Pri_Logo} />
                </div>
                <div className='productDes' style={{ width: '50vw' }}>
                    <p>
                        "At Nature's Cabin, we believe in the harmony of farm, food, and nature, cultivating a sustainable future one harvest at a time."
                    </p>
                    <p className='footer-head-second-para'>
                        Join the Nature’s Cabin Community and get notified of exclusive promotions and discounts, new products, announcements and more.
                    </p>
                    <div className='email-box'>

                        <div style={{display:'flex'}}>
                            <input type="text" placeholder='Email Id' />
                        </div>
                        <div className='subscribe-button'>
                            <button
                                style={{

                                    border: 'none',
                                    backgroundColor: '#F7C35F',
                                    borderRadius: '14.471px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    marginBottom:'10px',
                                    height:'3vh'
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='footer-foot'>
                <div>
                    <h3>Quick Links</h3>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer