import "./itemListContainer.css";

const ItemListContainer = () => {
    return(
        <div className="itemContainer">
            <div className="categoryBar">
                <p>Pizzas</p>
                <p>Ver más...</p>
            </div>
            <div className="itemCardContainer">
                <div className="itemCard">
                    <img src="./pizza.jpg" alt="Logo Empresa"/>
                    <h3 className="itemTitle">Chipotle</h3>
                    <p className="itemDetail">Descripción descripción descripción</p>
                    <p className="itemPrice">$130</p>
                </div>
                <div className="itemCard">
                    <img src="./pizza.jpg" alt="Logo Empresa"/>
                    <h3 className="itemTitle">Chipotle</h3>
                    <p className="itemDetail">Descripción descripción descripción</p>
                    <p className="itemPrice">$130</p>
                </div>

            </div>
        </div>
    )
}

export default ItemListContainer;