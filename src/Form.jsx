import React from 'react';

function Form(props) {

    const [username, setUsername] = React.useState("Your name here...");
    const [message, setMessage] = React.useState("Your message here...");
    const [paymentMethod, setPaymentMethod] = React.useState("visa");

    const handleChangeInput = (event) => {
        setUsername(event.target.value);
    };

    const handleChangeTextArea = (event) => {
        setMessage(event.target.value);
    };

    const handleCheckBox = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            username: username,
            message: message,
            paymentMethod: paymentMethod
        }
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    };

    return (
        <form onSubmit={handleSubmit}>

            <label for="username">Username:</label>
            <input type="text" name="username" id="username"
                    value={username} 
                    onChange={handleChangeInput}/><br/>
            <label for="message">Message:</label>

            <textarea name="message" id="message" 
                    value={message} 
                    onChange={handleChangeTextArea}/><br/>
            <p>Méthode de paiement:</p>

            <select name="methods" id="paymentMethod"
                    onChange={handleCheckBox}>
                <option selected value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="paypal">PayPal</option>
            </select><br/>

            <button id="submitBtn">SEND</button>

        </form>
    )
}

export default Form