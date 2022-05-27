import React, {useEffect, useState} from 'react';

function ItemList({generator}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newitem = generator();
        setItems(newitem)
        console.log("Salom man  ciqdm");
    }, [generator])

    return (
        <div>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </div>
    );
}

export default ItemList;