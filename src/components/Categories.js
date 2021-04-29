import '../styles/Categories.css'

function Categories({activeCategory, setActiveCategory, categories, }) {

    return (
        <div className="f-categories">
            <select
                value={activeCategory}
                onChange={event => setActiveCategory(event.target.value)}
                className="f-categories-select"
            >
                <option value="">---</option>
                {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}


export default Categories;