import React, { useState,useEffect } from "react";
import { Modal,Container, Button, Form } from "react-bootstrap";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
export default function StarRating() {
  const [viewName,setViewName] = useState("");
  const [viewStar,setviewStar] = useState("");
  const [viewComments,setviewComments] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [star, setStar] = useState();
  const [Comments, setComments] = useState("");
  const [EditMode,setEditMode] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>{
    console.log("haiiii")
    axios
    .post("http://localhost:4001/users", { name, star,Comments })
    .then(response => {
      console.log(response)
      // Handle response
      setShow(true);
      axios
      .get("http://localhost:4001/users")
      .then(response => {
        console.log(".................",response.data[response.data.length-1])
        const data = response.data[response.data.length-1]
        console.log("MMMMMMMMMM",data.name);
        setViewName(data.name);
        setviewStar(data.star);
        setRating(data.star);
        setviewComments(data.Comments);
      })
      setName("");
      setStar(0);
      setComments("");
      setRating(0);
      setHover(0);
  
    })
  }
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

    const notify = () => {
        toast.success('Feedback submitted sussesfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  }
  
  const LoginForm = ({ onSubmit }) => {
  
   
    return (
      <Form class="mb-50px" onSubmit={onSubmit}>
            <label htmlFor="namedInput">Name:</label>
              <input type="text" className="form-control input" value={viewName}placeholder="Enter name"/>
              <div>
              <label htmlFor="namedInput">Please rate us:</label></div>
              <div className="star-rating">
          {[...Array(5)].map((start, index) => {
            // console.log("/////",index);
            index += 1;
            return (
    
              <button
              type="button"
              key={index}
              className={index <= (rating) ? "on" : "off"}
            >
            
            <span className="star">&#9733;</span>
          </button>

    
            );
          })}
        </div>
               <label htmlFor="namedInput">Comments:</label>
     <textarea className="form-control" rows="5" value={viewComments} id="comment"  name="text"></textarea>
     {/* <button type="submit" className="btn btn-primary" onClick={()=>{}} id="myForm" style={{float: "right",marginTop:2}}>Submit</button> */}
    </Form>
    );
  };
  return (
    <>
     {/* <Container> */}
        <div className="row mb-5 border:borderexample" 
        // style={{backgroundColor:"gray",marginTop: 10}} 
        >
    <div className="col-sm-12 float:left">
    </div>
    <div className="col-sm-6">
      <h2>Feed back </h2>
      <div name="myform" method="post"
      style={{textAlign: "left", padding: 30,borderRadius: 10,marginBottom: 10, backgroundColor: "white"}}
      >
        <div className="mb-3 mt-3">
        <label htmlFor="namedInput">Name:</label>
          <input type="text" 
        //   style={{borderColor:"info"}}
           className="form-control input" 
          onChange={(e) => setName(e.target.value)} placeholder="Enter name" value={name}
          />
          <div>
          <label htmlFor="namedInput">Please rate us:</label></div>
          <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        // console.log("/////",index);
        index += 1;
        return (

          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {setRating(index);setStar(index)}}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            
            <span className="star">&#9733;</span>
          </button>


        );
      })}
    </div>
           <label htmlFor="namedInput">Comments:</label>
 <textarea className="form-control" rows="5"  value={Comments} onChange={(e) => setComments(e.target.value)} id="comment" name="text"></textarea>
 <button type="submit" className="btn btn-primary mb-3 mt-3"
  onClick={handleShow} 
  id="myForm" style={{float: "left",marginTop:2}}
  >Submit</button>
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
      </div>
  </div>
  </div>
    {/* </Container>  */}
    <div></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>feedback </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="secondary" class="mb-5" data-bs-dismiss="modal"
           onClick={() => {
            handleClose();
            notify();
          }}>
           {/* onClick={ handleClose} */}
           
         ok 
          </Button>
          {/* <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
        onClick={()=>handleUpdate()}
        >Update</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}