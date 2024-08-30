import React, { useEffect } from 'react';
import Header from '../components/Header';
import styles from '../style/Manageemp.module.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Tabledata from '../components/Tabledata';

function Manageemp() {
  const [show, setShow] = useState(false);
  const [employes, setEmployes] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();

//GET API
const getEmp = async()=>{
  try{
    const empData = await fetch("http://localhost:8000/manageemployee")
    const response = await empData.json()
    setEmployes(response)
    console.log(response.fname);
  }catch(err){
console.error(err)
  }
}

useEffect(()=>{
  getEmp()
  console.log("data use effect me he");
},[])

//DELET API
// const deletData = async()=>{
//   try{
//     let response = await fetch("http://localhost:8000/manageemployee/:id",{
//       method:"DELET",
//       headers:{'content-Type':'application/json'},
//       body:JSON.stringify()
//     })
//     let result = response.json()
//   }catch(err){
// console.log(err)
//   }
// }

// POST API
  const fetchData = async(result)=>{
    try{
    let response = await fetch(`http://localhost:8000/manageemployee`,{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(result)
  })
     let store = await response.text()
     console.log(store);
     getEmp()
  
}catch(err){
console.log(err)
}
  }


  const collect = async (data) => {
    const newEmployes = [...employes, { id: employes.length + 1, ...data }];
    setEmployes(newEmployes);
    console.log(newEmployes);
    await fetchData(data)
    handleClose();
  };

  const delet = (id) =>{
setEmployes(employes.filter((emp)=>emp.id !== id))
  }
  
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContainer}>
            <Button variant="contained" color="success" onClick={handleShow}>
              Add Employee
            </Button>
            <Tabledata data={employes} onDelet={delet} />
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(collect)}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user name"
                  autoFocus
                  {...register('fname')}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  autoFocus
                  {...register('email')}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="number"
                  autoFocus
                  {...register('contact')}
                />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Manageemp;
