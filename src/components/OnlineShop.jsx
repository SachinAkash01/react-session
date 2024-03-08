import React, {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} placeholder="Enter your name.." />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} placeholder="Select quantity.." type="number" min="0" max="5" />
            <p>Quantity: {quantity}</p>

            <textarea className="textarea-handler" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Debit card">Debit card</option>
                <option value="Credit card">Credit card</option>
                <option value="Paypal">Paypal</option>
                <option value="Kidney">Kidney</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent;
