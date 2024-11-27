import React from 'react'
import profile1 from '../utils/profile_images.jpg'
const Review = () => {
    return (
        <div style={{ width: '306.19px',marginLeft:'2vw',marginRight:'2vw'}}>
            <div style={{position:'relative',top:'40px'}}>
                <img style={{ borderRadius: '50%', width:'129px' }} src={profile1} alt="" srcset="" />
            </div>
            <div style={{ backgroundColor:'#EFF9F2', borderRadius:'22px', boxShadow:'8px 8px #68A47F'}}>
                <div>
                    <h4>Ranjeev Singh</h4>
                </div>
                <div style={{fontSize:'16px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?
                </div>
            </div>
        </div>
    )
}

export default Review