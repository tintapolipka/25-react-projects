import useResponsive from "./useResponsive";

export default function TestUseResponsives(){
    const {x,y} = useResponsive();

    return <div>
        <p>x: {x}</p>
        <p>y: {y}</p>
    </div>

}