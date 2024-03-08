import React from 'react'

const ButtonEvent = () => {
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick2 = (e) => e.target.textContent = "OUCH!"; //Change the text of the button.

    return (
        <button className="button-external" onDoubleClick={(e) => handleClick2(e)}>Click me</button>
    )
}

export default ButtonEvent;
