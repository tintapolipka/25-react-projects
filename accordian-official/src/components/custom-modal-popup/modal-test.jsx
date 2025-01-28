import { useState } from "react"
import Modal from "./modal.jsx"


export default function ModalTest(){
 const [showModalPopup,setShoWModalPopup] = useState(false);

function handleToggleModalPopup(){
  setShoWModalPopup(!showModalPopup);
}

  return <div>
    <button onClick={handleToggleModalPopup}>Open modal Popup</button>
    
    {
      showModalPopup && <Modal 
      body={<div>Customized body</div>}
      header={"Outer header"}
      footer={"Outer footer"}
      handleClose={handleToggleModalPopup}/>
    }
  </div>  
}