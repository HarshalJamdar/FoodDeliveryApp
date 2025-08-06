import { RESTRO_LOGO_BASE_URL } from '../utils/constants';
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return(
    <div className='res-card' >
      <img 
        src={RESTRO_LOGO_BASE_URL + resData.info.cloudinaryImageId} 
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