import RestaurantCard from './RestaurantCard';
import { resObj } from './constant';
 

const Body = () => {
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resObj?.map((obj) => <RestaurantCard resData={obj} key={obj?.info?.id} />)}
      </div>
    </div>
  );
}

export default Body;