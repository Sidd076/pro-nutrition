import React, { useState } from 'react';

const FoodBox = ({ food, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddClick = () => {
        onAdd({
            ...food,
            quantity: quantity,
        });
    };

    return (
        <div className="box">
            <article className="media">
                <figure className="media-left image is-64x64">
                    <div className="media-left">
                        <div className="img-container">
                            <img src={food.image} alt={food.name} className="img-fluid" />
                        </div>
                    </div>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={handleAddClick}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default FoodBox;
