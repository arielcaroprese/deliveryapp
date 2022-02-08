import "./cardProduct.css";

const CardProduct = () => {
    return (
        <div className="cardProductContainer">
            <img src="./pizza.jpg" alt="fotoProducto"/>
            <h1 className="title">Pizza</h1>
            <h2 className="price">$160</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Lacus vestibulum sed arcu non odio euismod lacinia at.</p>
        </div>
    );
}

export default CardProduct;