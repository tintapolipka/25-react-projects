import "./modal.css";

export default function Modal({ id,header,body,footer,handleClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
      <div className="header">
        <span className="close-modal-icon" onClick={handleClose? handleClose: ()=>alert('cső')}>&times;</span>
        <h2>{header? header :"Header"}</h2>
      </div>
      <div className="body">
        {body? body : <div><p>This is the modal Body</p></div>}
      </div>
      <div className="footer">{
        <p>
        {footer? footer : <div><h2>This is the modal Footer</h2></div>}
        </p>
      }</div>
      </div>
    </div>
  );
}
