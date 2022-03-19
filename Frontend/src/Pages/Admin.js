import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';



const Admin = () => {
    const list = useSelector(state => state.main.infos)
   




    return (
    <div style={{ height: 300, width: '100%' }}>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>email</th>
      <th>age</th>
      <th>cv</th>
      <th>lm</th>
    </tr>
  </thead>
  <tbody>
      {list.map((el,key)=>(
        <tr>
      <td>{key}</td>
      <td>{el.name}</td>
      <td>{el.email}</td>
      <td>{el.age}</td>
      <td>{el.cv}</td>
      <td>{el.lm}</td>
    </tr>
      ))}
    
    
  </tbody>
</Table>
    </div>
    )
}

export default Admin
