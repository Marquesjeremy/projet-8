import Slideshow from "../../components/Slideshow/slide"
import LocationDatas from "../../components/LocationDatas/locationDatas";

function LocationDetails({data}) {
    return (
        <main>
            <Slideshow data={data}/>
            <LocationDatas data={data} />
        </main>
    )
}

export default LocationDetails;