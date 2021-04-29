import '../styles/PlantItem.css'
import CareScale from './CareScale.js'


function PlantItem({id, name, cover, water, light}) {
    return (
        <li key={id} className="fa-plants-item" onClick={() => handleClick(name)}>
            <img className='fa-plants-item-cover' src={cover} alt={`${name} cover`} />
			<p>{name}</p>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>

        </li>
    );
}

function handleClick(plantName) {
    alert(`Vous venez de cliquer sur ${plantName}`);
}


export default PlantItem;