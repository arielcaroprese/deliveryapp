import './App.scss';
import Nav from './components/Home/Nav/Nav.js';
import CardRestaurant from './components/Home/CardRestaurant/CardRestaurant.js';
import CategoriesButton from './components/Home/CategoriesButton/CategoriesButton.js'

function App() {
  return (
    <>
      <Nav/>
      <CardRestaurant/>
      <CategoriesButton/>
    </>
  );
}

export default App;
