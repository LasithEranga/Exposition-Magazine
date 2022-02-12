import { Modal } from "react-bootstrap";

const ImageModal = (props)=>{
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={props.image?props.image:''} alt={props.alt?props.alt:''} style={{width:'100%'}}/>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;