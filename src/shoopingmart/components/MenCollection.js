import React from 'react';

const MenCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6,price1,price2,price3,price4,price5,price6 } = props.menshopping;
  return (
    <div className="menSection">
     <h2>Gents Fashion</h2>
      <div className="menImages">
        <img src={image1} alt={title} />
       
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
        <img src={image6} alt={title } />
      </div>
      <div className="price">
        <h5>₹{price1}</h5>
        <h5>₹{price2}</h5>
        <h5>₹{price3}</h5>
        <h5>₹{price4}</h5>
        <h5>₹{price5}</h5>
        <h5>₹{price6}</h5>
      </div>
  
    </div>
  );
}

export default MenCollection;
