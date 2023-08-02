import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tags from "./Tags";
import Rate from "./Modale";
import Collapse from "../Collapse/CollapseActiveChevron";


function LocationDatas({data}) {

    // On récupère l'ID avec useParams
    const { id } = useParams();
    // On initialise un tableau de toutes les infos utiles avec useState
    const [location, setLocation] = useState({
        host: { name: "", picture: "" },
        rating: "",
        location: "",
        equipments: [],
        tags: []
    });
    
    const navigate = useNavigate();

    // On utilise useEffect pour remplir le tableau et on en profite pour comparer l'ID de l'URL et celui existant dans le fichier JSON
    useEffect(() => {
        let foundLocation = data.find((data) => data.id === id);
        console.log(data);
        if (foundLocation) {
            setLocation(foundLocation);
        }
    }, [data, id, navigate]);

    // On initialise une variable, elle retournera la liste d'équipements avec .map
    let locationEquipment = location.equipments.map((i, index) => (
        <li className="location-equipments" key={i}>
            {location.equipments[index]}
        </li>
    ));

    return (
        <section className="location-datas-bloc">
            <figure className="location-datas-general">
                <div className="location-datas-info">
                    <h1>{location.title}</h1>
                    <h2>{location.location}</h2>

                    {/* Utilisation du composant Tags */}
                    <ul className="datas-info-tags">
                        <Tags location={location} />
                    </ul>
                </div>

                <figcaption className="datas-profil">
                    <div className="datas-profil-profil">
                        <h3>{location.host.name}</h3>
                        <img
                            src={location.host.picture}
                            alt="Profil du diffuseur de l'annonce"
                        />
                    </div>

                    {/* Utilisation du composant Rate */}
                    <div className="datas-profil-rate">
                        <Rate location={location.rating} />
                    </div>
                </figcaption>
            </figure>

            {/* Réutilisation du composant Collapse */}
            <div className="location-datas-detail">
                <Collapse
                    about={false}
                    title="Description"
                    text={location.description}
                />
                <Collapse
                    about={false}
                    title="Equipements"
                    text={<ul>{locationEquipment}</ul>}
                />
            </div>
        </section>
    )
}

export default LocationDatas;