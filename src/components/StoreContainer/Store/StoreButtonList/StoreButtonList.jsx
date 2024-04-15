import React, {useState, useEffect, useRef} from 'react';

// function StoreButtonList({cornVal, setCornVal, setCornValMod_Passive, setCornValMod_Active}) {
//   const [passiveModifier, setPassiveModifier] = useState(0);
//   // STARTING VAL BE SAME AS GAMEPAGE VAL FOR CornValMod_Active 
//   const [activeModifier, setActiveModifier] = useState(1);
//   const timerRef = useRef();
  
//   // TIMER BASED CPS USE EFFECT
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setCornVal(secs => secs + passiveModifier);
//     }, 1000);

//     return () => {
//       clearInterval(timerRef.current);
//     };
//   }, [passiveModifier, setCornVal]);


//   // ACTIVE (CLICK) MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
//   const addActiveModifier = (modifierValue) => {
//     setActiveModifier(prevModifier => prevModifier + modifierValue);
//     setClickMod(activeModifier + modifierValue); 
//   };

//   // CALLED BY ACTIVE MODIFIER FUNCTION
//   const setClickMod = (newScoreModifier) => {
//     setCornValMod_Active(newScoreModifier);
//   };

//   // PASSIVE MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
//   const addPassiveModifier = (modifierValue) => {
//     setPassiveModifier(prevModifier => prevModifier + modifierValue);
//     setCPS(passiveModifier + modifierValue); 
//   };

//   // CALLED BY PASSIVE MODIFIER FUNCTION
//   const setCPS = (newScoreModifier) => {
//     setCornValMod_Passive(newScoreModifier);
//   };

//   return (
//     <div>
//       <h3>StoreButtonList</h3>
//       {/* CPS BUTTONS */}
//       <button onClick={() => addPassiveModifier(1)}>Upgrade + 1 CPS</button>
//       <button onClick={() => addPassiveModifier(2)}>Upgrade + 2 CPS</button>
//       <button onClick={() => addPassiveModifier(5)}>Upgrade + 5 CPS</button>
//       {/* CLICK MODIFIER BUTTONS */}
//         <button onClick={() => addActiveModifier(1)}>Upgrade + 1 Click</button>
//       {/* TEST FOR BUYING  */}
//         <button onClick={() => {
//           if (cornVal >= 20) {
//             setCornVal(cornVal - 20);
//           } else {
//             alert("Not enough corn!");
//           }
//         }}>COST 20 CORN</button>
//     </div>
//   );
// }

function StoreButtonList({ cornVal, setCornVal, setCornValMod_Passive, setCornValMod_Active }) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  const [activeModifier, setActiveModifier] = useState(1);
  const [upgradesData, setUpgradesData] = useState([
    {
      name: "Popcorn Machine",
      level: 0,
      price: 20,
      productionRate: 1,
      effect: "Passive",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/popcorn-machine-10736056-8784226.png?f=webp&w=256"
    },
    {
      name: "Popcorn Cannon",
      level: 0,
      price: 40,
      productionRate: 2,
      effect: "Passive",
      img: "https://cdn.iconscout.com/icon/free/png-512/free-cannon-1777375-1512065.png?f=webp&w=256"
    },
    {
      name: "Frying Pan",
      level: 0,
      price: 60,
      productionRate: 0.5,
      effect: "Active",
      img: "fakelink"
    },
  ]);
  const timerRef = useRef();

 useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(secs => Math.floor((secs + passiveModifier) * 1000) / 1000);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [passiveModifier, setCornVal]);

  const setCPS = (newScoreModifier) => {
    setCornValMod_Passive(Math.floor(newScoreModifier * 1000) / 1000);
  };

  const addPassiveModifier = (modifierValue) => {
    setPassiveModifier(prevModifier => {
      const newModifier = prevModifier + modifierValue;
      setCPS(newModifier);
      return newModifier;
    });
  };

  // ACTIVE (CLICK) MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
  const addActiveModifier = (modifierValue) => {
    setActiveModifier(prevModifier => prevModifier + modifierValue);
    setClickMod(activeModifier + modifierValue); 
  };

//   // CALLED BY ACTIVE MODIFIER FUNCTION
  const setClickMod = (newScoreModifier) => {
    setCornValMod_Active(newScoreModifier);
  };

  const handleActiveUpgrade = (index) => {
    const upgrade = upgradesData[index];
    const newLevel = upgrade.level + 1;
    const newPrice = upgrade.price + 1.2 * newLevel;
    const newProductionRate = upgrade.productionRate + 0.02 * newLevel;
  
    if (cornVal >= newPrice) {
      setCornVal(cornVal - newPrice);
  
      const newActiveModifier = activeModifier + newProductionRate;
  
      setActiveModifier(newActiveModifier); 
      setCornValMod_Active(newActiveModifier);
  
      const updatedUpgradesData = [...upgradesData];
      updatedUpgradesData[index] = { ...upgrade, level: newLevel, price: newPrice, productionRate: newProductionRate };
      setUpgradesData(updatedUpgradesData);
  
      console.log(`Upgraded ${upgrade.name} to level ${newLevel}`);
    } else {
      alert("Not enough corn!");
    }
  };

  const handlePassiveUpgrade = (index) => {
    const upgrade = upgradesData[index];
    const newLevel = upgrade.level + 1;
    const newPrice = upgrade.price + 1.2 * newLevel;
    const newProductionRate = upgrade.productionRate + 0.02 * newLevel;

    if (cornVal >= newPrice) {
      setCornVal(cornVal - newPrice);

      addPassiveModifier(newProductionRate);

      const updatedUpgradesData = [...upgradesData];
      updatedUpgradesData[index] = { ...upgrade, level: newLevel, price: newPrice, productionRate: newProductionRate };
      setUpgradesData(updatedUpgradesData);


      console.log(`Upgraded ${upgrade.name} to level ${newLevel}`);
    } else {
      alert("Not enough corn!");
    }
  };

  return (
    <div>
  <h3>StoreButtonList</h3>
  {upgradesData.map((upgrade, index) => (
    <div key={index}>
      <div className="upgrade-item">
        <div className="upgrade-header">
          <h4>{upgrade.name}</h4>
          <p className="level">Level: {upgrade.level}</p>
        </div>
        <p>Effect: {upgrade.effect}</p>
        <p>Production Rate: {Math.floor(upgrade.productionRate * 1000) / 1000}</p>
        {upgrade.effect === "Passive" && (
          <button onClick={() => handlePassiveUpgrade(index)}>Upgrade ${Math.floor(upgrade.price * 1000) / 1000}</button>
        )}
        {upgrade.effect === "Active" && (
          <button onClick={() => handleActiveUpgrade(index)}>Upgrade ${Math.floor(upgrade.price * 1000) / 1000}</button>
        )}
      </div>
    </div>
  ))}
</div>

  );
}




export default StoreButtonList;
