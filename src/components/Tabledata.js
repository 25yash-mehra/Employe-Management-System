import { Button } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';

function Tabledata({ data }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => (
              <tr key={index}> 
                <td>{val.id}</td> 
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.number}</td>
               <td> <Button sx={{ backgroundColor: 'blue', color: 'yellowgreen' }}>
  Update
</Button></td>

              <td>  <Button sx={{background:"red",color:"black"}}>delet</Button>  </td>
              </tr>
            )) 
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Tabledata;
