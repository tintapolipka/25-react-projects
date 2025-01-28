import { useEffect, useState } from "react";
import './styles.css';

export default function ScrollIndcator(props) {
//   const [scrolledPercent, setScrolledPercent] = useState(0);

//     function handleOnScroll (){
//         const heightOfSite = document.documentElement.offsetHeight-document.documentElement.clientHeight;
//         const scrolledY = window.scrollY;

//         const percent = scrolledY / heightOfSite *100;
//         setScrolledPercent(percent);
//         console.log(scrolledPercent);
//     }
    console.log('props.scrolledPercent: ',props.scrolledPercent)

  return (
    <div className="scroll-indicator-container">
      Custon Scroll Indicator
      <div className="scroll-indicator-bar-bg">
        <div className="scroll-indicator-bar-inner"  style={{width: `${props.scrolledPercent}%`}}></div>
      </div>
    </div>
  );
}
