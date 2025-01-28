import "./tile.css"

export default function Tile({handleOnClick,id,getContent}){

    return <div
        className="tic-tac-toe-tile"
        id={id}
        onClick={handleOnClick}
        >
        {getContent + " "} 
    </div>
}