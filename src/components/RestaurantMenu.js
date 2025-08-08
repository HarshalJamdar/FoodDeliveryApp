import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=42581&catalog_qa=undefined&submitAction=ENTER');

        const json = await data.json();
//json.data.cards[2].card.card.info.id/name
//json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.[2].card.card.itemCards[0]
        setResInfo(json?.data?.cards?.[2]?.card?.card);
    }

    return resInfo === null
    ? <Shimmer />
    : (
        <div className='menu'>
            <h1>{resInfo?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>
              <li>test1</li>
              <li>test2</li>
              <li>test3</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;
