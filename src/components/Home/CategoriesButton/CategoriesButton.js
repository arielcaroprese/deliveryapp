import "./categoriesButton.css";

const CategoriesButton = () => {
    return (
        <div className="categoriesContainer">
            <div className="divider"></div>
            <form>
                <label>Categorías</label>
                <select>  
                    <option value="pizzas">Pizzas</option>  
                    <option value="empanadas">Empanadas</option>  
                    <option value="promos">Promos</option>
                </select>  
            </form>
            <div className="divider"></div>
        </div>
    );
}

export default CategoriesButton;