import React from 'react'

const Restaurantcard = ({ restaurantName, starRating, deliverytime, cuisines, location, imgId }) => {

   const img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (
        <>

            <div>
                <img className="rounded-2xl h-48 w-full" src={img_url+imgId} />
                <div className="font-bold">{restaurantName} </div>
                <div className=" gap-2 flex-row">
                    <div>⭐{starRating}</div>
                    <div>🚚{deliverytime}min</div>
                </div>
                    <div> {cuisines}</div>
                    <div>{location}</div>
            </div>

        </>
    )
}

export default Restaurantcard

