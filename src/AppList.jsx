import React from 'react'
import List from './components/List'

function AppList() {
    const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Avacado", calories: 105}, 
                    {id: 3, name: "Mango", calories: 60},
                    {id: 4, name: "Pineapple", calories: 75},
                    {id: 5, name: "Banana", calories: 120}];

    const vegetables = [{id: 6, name: "Carrot", calories: 95},
                        {id: 7, name: "Potatoes", calories: 105}, 
                        {id: 8, name: "Corn", calories: 60},
                        {id: 9, name: "Broccoli", calories: 75},
                        {id: 10, name: "Beetroot", calories: 120}];

    return (
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}
        </>
    )
}

export default AppList;
