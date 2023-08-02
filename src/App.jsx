import Home from './pages/Home/home';
import About from './pages/About/about';
import LocationDetails from './pages/LocationDetails/locationDetails';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            try {
                const requet = await fetch("./locationsList.json",{method: "GET"});
                if(requet.ok){
                    const data = await requet.json();
                    console.log(data);
                    setData(data);
                }
            }  catch(e){
                console.log(e);
            }
        }
        getData();
    },[]);
    console.log(data);
    return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/"                   element={<Home data={data}/>} />
                <Route exact path="/home"               element={<Home data={data}/>} />
                <Route exact path="/about"              element={<About />} />
                <Route exact path={'/location/:id'}     element={<LocationDetails data={data}/>} />
                <Route exact path='/*'                  element={<Error />} />
            </Routes>
        <Footer />
    </BrowserRouter>
    )
};

export default App;