import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/CardsDatas";

function Home({data}) {
    return (
        <main>
            <Banner data={data}/>
            <Card data={data}/>
        </main>
    );
}

export default Home;