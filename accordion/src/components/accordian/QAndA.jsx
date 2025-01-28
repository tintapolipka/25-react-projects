import "./QandA.css"

export default function QandA({answer,isVisible}){
  
  //  const textParagraph = isVisible? <p>{answer}</p> : "";

    return (
        <div className="expanded-text" aria-hidden={!isVisible}>
            <p>{answer}</p>
        </div>
    )
}