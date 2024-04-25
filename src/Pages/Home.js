import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [items,setItems] = useState([]);
    const [filter,setFilter] = useState("");
    
    const {id} = useParams();

  useEffect(()=>{
    axios.get('http://localhost:8080/getItems').then(response=>setItems(response.data))
  }, [])

  const deleteItem = async (id) => {
     await axios.delete(`http://localhost:8080/getItems/${id}`)
     axios.get('http://localhost:8080/getItems').then(response=>setItems(response.data))
  }
  return (

    
      <div className='Container'>
        <input className="col-md-3 offset-md-3 border rounded p-2 mt-2 my-4 shadow" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setFilter(e.target.value)}/> 
            <div className='py-4'>
              
                <div className='col-md-9 offset-md-1 border rounded p-4 mt-3 shadow'>
      

        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      {/* <th scope="col">ImageURL</th> */}
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        items.filter((item)=> item.name.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter) 
        ).map((item,index)=>(
     <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>price: ${item.price}</td>
      {/* <td>{item.imageUrl}</td> */}
      <td>
        <Link className='btn btn-outline-primary mx-2   '  to={`/getItems/${item.id}`}>Edit</Link>
        <button className='btn btn-outline mx-2'   >View</button>
        <button className='btn btn-outline-danger mx-2' onClick={ ()=> deleteItem(item.id)} >Delete</button>
      </td>

    </tr>
    )
    )
    }
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
</div>
</div>
    </div>
  )
}

export default Home