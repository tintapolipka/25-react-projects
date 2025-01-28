import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {
  // a state egy objektum lesz, ahol gyűjtjük az 
  // adott szinthez tartozó 'label'-t, és Boolean-al
  // jelöljük, hogy aktívak-e?
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    //a korábbi objektum tartalmához hozzáadjuk a
    //paraméterként kapott label értékét, ami alapból 
    //!undefined, azaz true lesz.
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
            }
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}