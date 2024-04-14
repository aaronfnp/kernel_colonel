import React, {useState, useEffect, useRef} from 'react';
import UpgradeItem from './UpgradeItem';

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
  const [upgradesData, setUpgradesData] = useState([
    {
      name: "Popcorn Machine",
      level: 0,
      price: 20,
      productionRate: 5,
      effect: "WIP",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/popcorn-machine-10736056-8784226.png?f=webp&w=256"
    },
    {
      name: "Popcorn Cannon",
      level: 0,
      price: 40,
      productionRate: 10,
      effect: "WIP",
      img: "https://cdn.iconscout.com/icon/free/png-512/free-cannon-1777375-1512065.png?f=webp&w=256"
    }
  ]);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(secs => secs + passiveModifier);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [passiveModifier, setCornVal]);

  const handleUpgrade = (index) => {
    const upgrade = upgradesData[index];
    if (cornVal >= upgrade.price) {
      setCornVal(cornVal - upgrade.price);
      setPassiveModifier(prevModifier => prevModifier + upgrade.productionRate);
      const updatedUpgradesData = [...upgradesData];
      updatedUpgradesData[index].level++; 
      setUpgradesData(updatedUpgradesData);
      console.log(`Upgraded ${upgrade.name} to level ${updatedUpgradesData[index].level}`);
    } else {
      alert("Not enough corn!");
    }
  };

  return (
    <div>
      <h3>StoreButtonList</h3>
      {upgradesData.map((upgrade, index) => (
        <div key={index}>
          <UpgradeItem upgrade={upgrade} />
          <button onClick={() => handleUpgrade(index)}>Upgrade ${upgrade.price}</button>
        </div>
      ))}
    </div>
  );
}




export default StoreButtonList;
