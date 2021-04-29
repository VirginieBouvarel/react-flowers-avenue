import '../styles/CareScale.css'

function CareScale({scaleValue, careType}) {
    const ranges = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧';
    const careText = careType === 'light' ? "de lumière" : "d'eau";
    const quantity = {
        1: "peu",
        2: "modérément",
        3: "beaucoup"
    }

    return (
        <div className="care" onClick={() => alert(`Cette plante requiert ${quantity[scaleValue]} ${careText}`)}>
            {ranges.map((range) => scaleValue >= range ? <span key={range.toString()}>{scaleType}</span> : null)}
        </div>
    );
}

export default CareScale;