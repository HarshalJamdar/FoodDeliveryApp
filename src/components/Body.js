import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { FETCH_DATA_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,  setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_DATA_URL);
    const json = await data?.json();

    setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  return listOfRestaurants?.length === 0 
    ? <Shimmer />
    : (
        <div className='body'>
          <div className='filter'>
            <div className='search'>
              <input 
                type='text' 
                className='search-box'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button 
                className='search-btn' 
                onClick={() => {
                  const filteredList = listOfRestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                  setFilteredRestaurants(filteredList);
                }}
              >
                Search
              </button>
            </div>
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
            {filteredRestaurants?.map((obj) => <RestaurantCard resData={obj} key={obj?.info?.id} />)}
          </div>
        </div>
      );
}

export default Body;