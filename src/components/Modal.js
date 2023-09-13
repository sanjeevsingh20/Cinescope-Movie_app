import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

export default function Modals(props) {
    const {videokey,title}=props
  const customStyles = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius:"10px"
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  //   Modal.setAppElement('#yourAppElement');
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="text-white text-4xl mx-4 ">
      <i className="fa-brands fa-google-play text-red-500 bg-white px-3 py-2 rounded-full text-center " ><span className="text-sm mx-2 align-middle">{title}</span></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="d-none">Hello</h2>
        <div className="flex justify-end">

        <button onClick={closeModal}><i className="fa-solid fa-xmark text-xl"><span className="text-sm mx-2">Close</span></i></button>
        </div>
        <ReactPlayer
          className="bdr-10"
          height={"400px"}
          width={"60vw"}
          url={`https://www.youtube.com/watch?v=${videokey}`}
          
          controls
        />
      </Modal>
    </div>
  );
}
