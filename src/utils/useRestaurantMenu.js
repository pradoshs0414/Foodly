import axios from "axios"
import { useEffect,useState } from "react"
import { MENU_API } from "./constant"


const useRestaurantMenu = (resId)=>{
    const [menu,setMenu] = useState(null)
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        getData()
    },[])
   const getData=async()=>{
        const responseData = await axios.get(MENU_API+resId)
        console.log(responseData)
        const resData = responseData?.data?.data?.cards[2]?.card?.card?.info
        const menuData = responseData?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        setMenu(menuData)
        setResInfo(resData)
    }

    return [menu,setMenu,resInfo,setResInfo]
}

export default useRestaurantMenu