import React, {useState, useEffect, useRef} from 'react';

function StoreButtonList({cornVal, setCornVal, setCornValMod_Passive, setCornValMod_Active, isSell, buyModifier}) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  // STARTING VAL BE SAME AS GAMEPAGE VAL FOR CornValMod_Active 
  const [activeModifier, setActiveModifier] = useState(1);
  const timerRef = useRef();
  
  // TIMER BASED CPS USE EFFECT
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(secs => secs + passiveModifier);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [passiveModifier, setCornVal]);


  // ACTIVE (CLICK) MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
  const addActiveModifier = (modifierValue) => {
    setActiveModifier(prevModifier => prevModifier + modifierValue);
    setClickMod(activeModifier + modifierValue); 
  };

  // CALLED BY ACTIVE MODIFIER FUNCTION
  const setClickMod = (newScoreModifier) => {
    setCornValMod_Active(newScoreModifier);
  };

  // PASSIVE MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
  const addPassiveModifier = (modifierValue) => {
    setPassiveModifier(prevModifier => prevModifier + modifierValue);
    setCPS(passiveModifier + modifierValue); 
  };

  // CALLED BY PASSIVE MODIFIER FUNCTION
  const setCPS = (newScoreModifier) => {
    setCornValMod_Passive(newScoreModifier);
  };

  return (
    <div>
      <h3>StoreButtonList</h3>
      {/* CPS BUTTONS */}
      <button onClick={() => addPassiveModifier(1 * buyModifier)}>Upgrade + 1 CPS</button>
      <button onClick={() => addPassiveModifier(2 * buyModifier)}>Upgrade + 2 CPS</button>
      <button onClick={() => addPassiveModifier(5 * buyModifier)}>Upgrade + 5 CPS</button>
      {/* CLICK MODIFIER BUTTONS */}
        <button onClick={() => addActiveModifier(1 * buyModifier)}>Upgrade + 1 Click</button>
      {/* TEST FOR BUYING  */}
        <button onClick={() => {
          if (cornVal >= 20) {
            setCornVal(cornVal - 20);
          } else {
            alert("Not enough corn!");
          }
        }}>COST 20 CORN</button>
    </div>
  );
}

export default StoreButtonList;
