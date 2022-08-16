import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function Addmovie({HundleAdd}) {
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
    const [title, setTitle] =useState("")
    const [rate, setRate] =useState(0)
    const [image, setImage] =useState("")
    const [desc, setDesc] =useState("")
    const HandlSubmit=(e)=>{
        e.preventDefault()
        HundleAdd({title,rate,postUrl:image,Desc1:desc})
        setTitle('')
        setImage('')
        setRate('')
        setDesc('')
        closeModal() 

    }
    return (
        <div>
            <button  style={{ backgroundColor:"green"}} onClick={openModal}>Add film</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              
                <div style={{ backgroundColor: "yellow" }}>My new movies</div>
                <form  onSubmit={HandlSubmit}>
                    
                    <label style={{ backgroundColor: "greenyellow" }}>title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} required value={title}/>
                    <button style={{ backgroundColor: "greenyellow" }}>rate</button>
                    
                    <input type="text" onChange={(e) => setRate(e.target.value)}required  value={rate} />
                    <button style={{ backgroundColor: "greenyellow" }}>postUrl</button>
                    
                    <input type="text" onChange={(e) => setImage(e.target.value)} required  value={image}/>
                    <button style={{ backgroundColor: "greenyellow" }}>Desc1</button>
                    
                    <input type="text" onChange={(e) => setDesc(e.target.value)} required  value={desc}/>
                    <button onClick={closeModal}>close</button>
                <button> submit</button>
                </form>
            </Modal>
        </div>
    );
}
