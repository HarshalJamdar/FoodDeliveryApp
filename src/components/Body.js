import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { FETCH_DATA_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_DATA_URL);
    const json = await data?.json();

    setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRestaurants?.length === 0) return <Shimmer />;
  return(
    <div className='body'>
      <div className='filter'>
        <button 
          className='filter-btn'
          onClick={() => {
            const resList = listOfRestaurants?.filter((res) => res?.info?.avgRating > 4.5);
            setListOfRestaurants(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className='res-container'>
        {listOfRestaurants?.map((obj) => <RestaurantCard resData={obj} key={obj?.info?.id} />)}
      </div>
    </div>
  );
}

export default Body;