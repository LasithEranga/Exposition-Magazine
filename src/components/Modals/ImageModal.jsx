import { Modal } from "react-bootstrap";

const ImageModal = (props)=>{
  
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Body className="p-1 p-lg-0">
        <img  src={props.image?props.image:''} alt={props.alt?props.alt:''} style={{width:'100%'}}/>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;