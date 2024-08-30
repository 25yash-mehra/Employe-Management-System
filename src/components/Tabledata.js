import { Button } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';

function Tabledata({ data , onDelet}) {

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => (
              <tr key={index}> 
                <td>{val._id}</td> 
                <td>{val.fname}</td>
                <td>{val.email}</td>
                <td>{val.contact}</td>
               <td> <Button sx={{ backgroundColor: 'blue', color: 'yellowgreen' }}>
  Update
</Button></td>

              <td>  <Button sx={{background:"red",color:"black"}} onClick={()=>{onDelet(val._id)}}>
              delet  </Button>  </td>
              </tr>
            )) 
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Tabledata;
