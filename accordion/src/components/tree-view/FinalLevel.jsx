export default function FinalLevel({self,deepness,key}){

   

    return (
        <div key={key} className="child">
            {deepness} Final level:{self.label}
        </div>
    )
}