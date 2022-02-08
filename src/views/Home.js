import Nav from "../components/Home/Nav/Nav.js";
import CardRestaurant from "../components/Home/CardRestaurant/CardRestaurant.js";
import CategoriesButton from "../components/Home/CategoriesButton/CategoriesButton.js";
import ItemListContainer from "../components/Home/ItemListContainer/ItemListContainer.js";

const Home = () => {
    return (
        <>
            <Nav/>
            <CardRestaurant/>
            <CategoriesButton/>
            <ItemListContainer/>
            <ItemListContainer/>
        </>
    )
}

export default Home