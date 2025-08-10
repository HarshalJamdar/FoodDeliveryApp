import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FETCH_MENU_DATA_URL, MENU_LOGO_BASE_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(FETCH_MENU_DATA_URL + resId);

        const json = await data.json();

        setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
        setMenuInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }

    return resInfo === null
    ? <Shimmer />
    : (
        <div className='menu'>
            <h1>{resInfo?.name}</h1>
            <h3>{resInfo?.cuisines.join(', ')}</h3>
            <h2>Menu</h2>
            <div className='menu-container'>
              {menuInfo.map((menu) => {

                return (
                    <div className='menu-card' key={menu?.card?.info?.id} >
                        <img 
                            src={MENU_LOGO_BASE_URL + menu?.card?.info?.imageId} 
                            alt='res-logo' 
                            className='menu-logo'
                        />
                        <h3>{menu?.card?.info?.name}</h3>
                        <h4>{menu?.card?.info?.description}</h4>
                        <h4>{menu?.card?.info?.itemAttribute?.vegClassifier}</h4>
                        <h4>{menu?.card?.info?.price/100}</h4>
                    </div>
                )
              })}
            </div>
        </div>
    );
}

export default RestaurantMenu;
