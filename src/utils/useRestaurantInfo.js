import axios from "axios"
import { useEffect, useState } from "react"
import { Restaurant_Info } from "./constant"

const useRestaurantInfo = ()=>{
    const[restaurantsInfo,setRestaurantsInfo]  = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async ()=>{
        const fetch = await axios.get(Restaurant_Info)
        const resData = await fetch?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(resData)
        setRestaurantsInfo(resData);
        setFilteredRestaurants(resData)
    }
    console.log(restaurantsInfo)
    return [restaurantsInfo,setRestaurantsInfo,filteredRestaurants,setFilteredRestaurants]
}

export default useRestaurantInfo