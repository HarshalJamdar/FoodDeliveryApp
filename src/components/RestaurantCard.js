
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return(
    <div className='res-card' >
      <img 
        src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.info.cloudinaryImageId} 
        alt='res-logo' 
        className='res-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(', ')}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;