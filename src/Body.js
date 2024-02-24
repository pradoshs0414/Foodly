import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import axios from "axios";

const  Body =  () => {
  const [rating,setRating] = useState();
  const[restaurantsInfo,setRestaurantsInfo]  = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState();

  useEffect(()=>{
    if(searchText != null){
      const search =restaurantsInfo.filter((resData)=> resData.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredRestaurants(search)
              
    }
    else if(rating!=0 && rating!=null){
      console.log(rating)
      const filter = restaurantsInfo.filter((resData)=>resData.info.avgRating>=rating)
      setFilteredRestaurants(filter)
    }
  },[searchText,rating])

  useEffect(()=>{
    (async function getData(){
      const responseData = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      resData =responseData?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsInfo(resData)
    setFilteredRestaurants(resData)
    })()
  },[])


  return restaurantsInfo.length ===0 ?(<div className="body"><Shimmer/></div>):(
    <div className="body">
      <div id="filters">
        <div className="searchBox">
          
          <input type="text" placeholder="Search" className="searchInput" onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
        </div>
        <div className="filterButton">
          <input
            type="range"
            min="1"
            max="5"
            class="slider"
            id="myRange"
            step={1}
            onChange={(e)=>{setRating(e.target.value)}}
          />
          <label htmlFor="myRange">Rating</label>
          
        </div>
      </div>
      <div className="restaurantCards">
        {
          filteredRestaurants.map((filRes)=>(<RestaurantCard key={filRes?.info?.id} data = {filRes?.info}/>))
        }
      </div>
    </div>
  );
};

export default Body;
