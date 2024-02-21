import { CDN_URL } from "./utils/constant";

const RestaurantCard = (props) => {
  const {data} = props
  const cuisines = data?.cuisines
  return (
    <div className="restaurant">
    <div className="restaurantCard">
        <div className="restaurantImage">
           <img src={CDN_URL + data.cloudinaryImageId} alt="burger"/> 
        </div>
        <div className="content">
            <h3>{data.name}</h3>
            <div className="rateDelivery">
            <h4>{data.avgRating}</h4>
            <li>{data.deliveryTime}</li>
            </div>
            <h4>{data.costForTwo}</h4>
            <h5> {cuisines.length>4?cuisines.slice(0,4).join(' , '):cuisines.join(' , ')}</h5>
        </div>
    </div>
    </div>
  )
}

export default RestaurantCard