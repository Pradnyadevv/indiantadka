import Restaturantcard from "./Restaurantcard";
 
const Cardcontainer=()=>{
    return(

        <div className=" flex gap-12 flex-wrap mx-2"> 
            <Restaturantcard
            restaurantName="Achija Hotel"
            starRating="4.2"
            deliverytime="15-20 "
            cuisines="Indian"
            location="Ghatkopar"
            imgId="e0839ff574213e6f35b3899ebf1fc597"/>

            <Restaturantcard
            restaurantName="Burger King"
            starRating="4.6"
            deliverytime="25-30"
            cuisines="Italian"
            location="Ghatkopar"
            imgId="RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG"
            />
            <Restaturantcard
            restaurantName="Dominos"
            starRating="4.8"
            deliverytime="30-40"
            cuisines="Italian"
            location="Chembur"
            imgId="RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/5adcdff2-8cfa-4052-af00-ce9d2ab8d9ca_24463.jpg"
            />
            <Restaturantcard
            restaurantName="Grameen Kulfi"
            starRating="4.5"
            deliverytime="20-30"
            cuisines="Dessert"
            location="Ghatkopar West"
            imgId="xyjb1hrqmwyatasvv8ri"
            />
            <Restaturantcard
            restaurantName="Baba Faluda"
            starRating="4.9"
            deliverytime="40-50"
            cuisines="Dessert"
            location="Kurla"
            imgId="ys88tnnklqgfhzsftmqq"
            />
            <Restaturantcard
            restaurantName="Mojo Pizza"
            starRating="4.2"
            deliverytime="40-50"
            cuisines="Italian"
            location="Powai"
            imgId="RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/cc816121-12a5-4fc7-a5ca-01406efd31e2_689521.JPG"
            />
            <Restaturantcard
            restaurantName="Big Bowl"
            starRating="4.0"
            deliverytime="20-30"
            cuisines="Indian"
            location="Sion"
            imgId="RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296658.JPG"
            />
            <Restaturantcard
            restaurantName="Meraki"
            starRating="4.5"
            deliverytime="15-20"
            cuisines="Indian"
            location="Vikhroli"
            imgId="wmmzbfzsvrxc38x9tvho"
            />
            <Restaturantcard
            restaurantName="Natural Icecream"
            starRating="4.8"
            deliverytime="20"
            cuisines="Dessert"
            location="Ghatkopar"
            imgId="p5pu4no5kwgf0pqokpkj"
            />
            <Restaturantcard
            restaurantName=""
            starRating=""
            deliverytime=""
            cuisines=""
            location=""
            imgId=""/>
        </div>
    )
}

export default Cardcontainer;