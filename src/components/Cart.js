import '../styles/Cart.css'
import { useState, useEffect} from 'react'

function Cart({cart, updateCart, activeCategory}) {
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);

    useEffect(() => document.title =`Flowers Ave : ${total}€ d'achat`, [total, activeCategory]);
    

    return isOpen ? (

        <div className="f-cart">

            <button
                className="f-cart-toggle-button"
                onClick={() => setIsOpen(false)}
                >Fermer
            </button>

            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul className="f-cart-list">
                        {cart.map(({name, price, amount}, index) => (
                            <li 
                                className="f-cart-item"
                                key={`${name}-${index}`}
                                >{name} {price}€ x {amount}
                            </li>
                        ))}
                    </ul>

                    <hr className="f-cart-hr"/>
                    <p>Total : {total}€</p>

                    <button
                        className="f-cart-clear-button"
                        onClick={() => updateCart([])}
                        >Vider le panier
                    </button>
                </div>
                
            ) : (
                <p className="f-cart-empty">Votre panier est vide</p>
            )}
            
        </div>

    ) : (

        <div className="f-cart-closed">
            <button
                className="f-cart-toggle-button"
                onClick={() => setIsOpen(true)}
                >Voir le Panier
            </button>
        </div>

    );
}

export default Cart;
