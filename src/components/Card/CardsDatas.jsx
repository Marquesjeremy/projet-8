import { Link } from "react-router-dom";

function Card({data}) {
    return (
        <section className="card-list">
            {
                data.map((location) =>
                    <Link className="card" to={"/location/" + location.id} key={location.id}>
                        <p>{location.title}</p>
                        <img src={location.cover } alt={location.title} />
                    </Link>
                )
            }
        </section>
    );
}

export default Card;