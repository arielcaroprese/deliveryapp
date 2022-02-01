import "./cardRestaurant.css";

const CardRestaurant = () => {
    return (
        <div className="cardContainer">
            <div className="cardLogoContainter">
                <img src="./chipotleLogo.jpg" alt="logoRestaurante"/>
            </div>
            <div className="cardInfoContainer">
                <h1>Chipotle</h1>
                <h3>Envío $130</h3>
                <h3>Espera</h3>
                <h3>Más info</h3>
            </div>
        </div>
    );
}

export default CardRestaurant;