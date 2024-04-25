import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddItems = () => {

    let navigate = useNavigate()

    const [Items,setItems] = useState({
        name :"",
        description:"",
        price:""

    })
    const {name,description,price} = Items

    const onInputChange = (e)=>{
        setItems({...Items, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e)=> {
    e.preventDefault();
        await axios.post("http://localhost:8080/addItem",Items);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'> Add your Item </h2>
        <form onSubmit={(e)=> onSubmit(e) }>

      
        <div className='mb-10'>
            <label htmlFor='Name' className='form-label'> Item Name </label> <br/>
            <input type='text' placeholder='Enter your Item name' name='name' value={name} onChange={(e) => onInputChange(e)}/><br/>

        </div> <br/>
        <div className='mb-10'>
            <label htmlFor='Name' className='form-label'> Description </label> <br/>
            <input type='text' placeholder='Enter the description' name='description' value={description} onChange={(e) => onInputChange(e)}/>

        </div> <br/>
        <div className='mb-10'>
            <label htmlFor='Name' className='form-label'> Price </label> <br/>
         <input type='number' placeholder='Enter Price in $' name='price' value={price} onChange={(e) => onInputChange(e)}/> <br/>

        </div> 
        <br/>
        <button type='submit' className='btn btn-outline-primary mx-2'> Submit</button>
        <Link to="/" className='btn btn-outline-danegr mx-2'> Cancel</Link>
        </form>
        </div>
        
        </div>
    </div>
  )
}

export default AddItems