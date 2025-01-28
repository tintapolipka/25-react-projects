import { useState } from "react";

export default function TestUseOnClickOutside(){
    const [componentDimensions,setcomponentDimensions] = useState(null);

    function handleOnResize(event){
        const componentBoundingClientRect = event.target.getBoundingClientRect();
    }
    
    function handleOnclickOutside(event){
        const cursorX = event.clientX;
        const cursorY = event.clienty;

        

        //if()
    }

    return <div onClick={()=>handleOnclickOutside(e)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        <div></div>
        Quibusdam facilis voluptas est dolorum exercitationem, numquam quisquam assumenda maxime quos vero quae laborum odit ut harum unde? Molestiae quia animi eligendi, officia commodi ut temporibus dolore vero voluptatibus alias eveniet eos illo suscipit iure molestias architecto nostrum similique sit ex. Dolorem ullam, commodi quaerat accusamus rerum maiores magni deleniti rem explicabo, suscipit unde numquam? Dignissimos magnam, veniam eius quidem iusto possimus architecto deserunt esse nobis, rerum eligendi provident cumque pariatur quae distinctio illo. Ratione numquam illum quisquam optio, fugiat repellat quis ullam adipisci facilis quaerat aut suscipit commodi vitae dignissimos dolorum.
    </div>
}