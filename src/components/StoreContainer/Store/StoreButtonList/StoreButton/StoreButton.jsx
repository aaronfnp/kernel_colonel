import './StoreButton.css';
import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

function StoreButton(props) {
    let modifierType = null;
    let modifierBuySell = 1;

    if (props.isPassive) {
        modifierType = 'Per Second';
    } else {
        modifierType = 'On Click';
    }

    const addActiveModifier = (modifierValue) => {
        props.setActiveModifier(prevModifier => prevModifier + modifierValue);
    };

    const addPassiveModifier = (modifierValue) => {
        props.setPassiveModifier(prevModifier => prevModifier + modifierValue);
    };

    return (
        <div className="storeButton">
            <button onClick={() => {
                if (props.cornVal >= props.price * props.buyModifier) {
                    props.setCornVal(props.cornVal - props.price * props.buyModifier);
                    if (props.isPassive) {
                        addPassiveModifier(props.productionRate * props.buyModifier);
                    } else {
                        addActiveModifier(props.productionRate * props.buyModifier);
                    }
                } else {
                    alert("Not enough corn!");
                }
            }}>
                {props.name}<br />
                {props.description}<br />
                +{props.productionRate} {modifierType} | Cost {props.price}
            </button>
        </div>
    );
}

// Define propTypes for StoreButton
StoreButton.propTypes = {
    isPassive: PropTypes.bool.isRequired,
    cornVal: PropTypes.number.isRequired,
    setCornVal: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    buyModifier: PropTypes.number.isRequired,
    setActiveModifier: PropTypes.func.isRequired,
    setPassiveModifier: PropTypes.func.isRequired,
    productionRate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default StoreButton;
