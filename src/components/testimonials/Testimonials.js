// import React from 'react'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './testimonials.css'
// const testimonials = () => {
//   const data = [
//     {avatar:AVTR1,
//       name:'Ajay Poudel',
//       review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium quis possimus molestiae rerum officiis. Repellendus cumque amet neque officia? Consequatur, minima iste harum fugit explicabo possimus quae enim similique?'
    
//     },
//     {avatar:AVTR2,
//       name:'Bidur Sapkota',
//       review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium quis possimus molestiae rerum officiis. Repellendus cumque amet neque officia? Consequatur, minima iste harum fugit explicabo possimus quae enim similique?'
    
//     },
//     {avatar:AVTR3,
//       name:'Shishir Pandey',
//       review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium quis possimus molestiae rerum officiis. Repellendus cumque amet neque officia? Consequatur, minima iste harum fugit explicabo possimus quae enim similique?'
    
//     },
//     {avatar:AVTR4,
//       name:'Subekshya Tandan',
//       review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium quis possimus molestiae rerum officiis. Repellendus cumque amet neque officia? Consequatur, minima iste harum fugit explicabo possimus quae enim similique?'
    
//     }
//   ]

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
// 	<section id='testimonials'>
//   <h5>Review From Clients</h5>    
//   <h2>Testimonials</h2>
  
//   <Slider {...settings}
    
//   className="container testimonila-container">

//     {
//       data.map(({avatar , name , review},index)=>{
//         return(
//           <>
//           <div key={index} className="testimonial">
//           <div className="client-avatar">
//             <img src={avatar} alt="" />
//             <h2>{name}</h2>
//             <small>{review}</small>
//           </div>
//           </div>
          
//           </>
//         )
//       })
//     }
//   </Slider>
//   </section>
//   )
// }

// export default testimonials
