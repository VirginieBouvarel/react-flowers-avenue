import '../styles/ShoppingList.css'
import { plants } from '../datas/plantsDatas.js'
import PlantItem from './PlantItem.js'
import Categories from './Categories.js'
import QuestionForm from './QuestionForm.js';

function ShoppingList({cart, updateCart, activeCategory, setActiveCategory}) {

    const categories = plants.map(plant => plant.category).filter((item, index, array) => array.indexOf(item) === index);

    function addToCart(name, price) {
        const currentPlantSaved = cart.find(plant => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(plant => plant.name !== name);
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1}]);
        }else {
            updateCart([...cart, {name, price, amount: 1}]);
        }
    }
    
    return (
        <div className="shop-content">

            <div className="f-form-right">
                <form onSubmit={handleSubmit}>

                    <input type="text" name="preference" defaultValue="Ma plante préférée"/>
                    <button className="f-form-btn" type="submit">Envoyer</button>
                </form>
            </div>

            <h3>Catégories :</h3>
            <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
            />

            <h3>Fleurs et plantes :</h3>
            <ul className="fa-plants-list">

                {plants.map(({id, name, cover, water, light, price, category}) => !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                name={name}
                                cover={cover}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
       
                    ) : null 
                )}
            </ul>

            <QuestionForm/>
        </div>

    );
}

function handleSubmit(event) {
    event.preventDefault();
    alert(event.target["preference"].value)
}

export default ShoppingList;