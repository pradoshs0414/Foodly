import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import useRestaurantInfo from "./utils/useRestaurantInfo";

const  Body =  () => {
  const [rating,setRating] = useState();
  const [restaurantsInfo,setRestaurantsInfo,filteredRestaurants,setFilteredRestaurants]=useRestaurantInfo()
  const [searchText,setSearchText] = useState(null);

  useEffect(()=>{
    let search = restaurantsInfo;
    if(searchText != null ){
      search = restaurantsInfo.filter((resData)=> resData.info.name.toLowerCase().includes(searchText.toLowerCase()))
    }
    if(rating!=0 && rating!=null){
      console.log(rating)
      search = search.filter((resData)=>resData.info.avgRating>=rating)
    }
    setFilteredRestaurants(search)
  },[searchText,rating])
 
  return restaurantsInfo?.length ===0 ?(<div className="body"><Shimmer/></div>):(
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
          filteredRestaurants?.map((filRes)=>(
            
            <Link
            key={filRes?.info?.id}
            to={"/restaurants/" + filRes?.info?.id}
          >
            
            <ResCard key={filRes?.info?.id} data = {filRes?.info}/>
          </Link>
          ))
        }
        
      </div>
    </div>
  );
};

export default Body;
