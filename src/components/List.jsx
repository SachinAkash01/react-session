import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical order
    // fruits.sort((a, b) => a.calories -b.calories); //Numeric order
    // fruits.sort((a, b) => b.calories - a.calories); //Reverse numeric order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //filter fruits where calories < 100
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100); //filter fruits where calories > 100

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            {item.calories}</li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;
