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


  const fetchData = async(result)=>{
  let response = await fetch(`http://localhost:8000/manageemployee`,{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(result)
  })
  let store = await response.json()
  console.log(store);
  }


  const collect = (data) => {
    const newEmployes = [...employes, { id: employes.length + 1, ...data }];
    setEmployes(newEmployes);
    fetchData(newEmployes)
    handleClose();
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContainer}>
            <Button variant="contained" color="success" onClick={handleShow}>
              Add Employee
            </Button>
            <Tabledata data={employes} />
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
                  {...register('name')}
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
                  {...register('number')}
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
