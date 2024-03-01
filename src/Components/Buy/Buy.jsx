import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Buffer } from "buffer";
import './Buy.css'
import { Button, Grid, TextField, Typography } from '@mui/material';

const Buy = () => {
    var[selectedimage,setSelectedimage]=useState(null);
    var[inputs,setInputs]=useState({
      
  
        "Fname":'',
        "Address":'',
        "City":'',
        "State":'',
        "Zipcode":'',
        "Contactno":'',
      })
      
  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

    const addHandler=() =>{
      console.log("Clicked")

      console.log(inputs)
      axios.post("http://localhost:3005/unew",inputs)
      .then((response)=>{
        alert("Item Ordered Successfully")
      })
      .catch(err=>console.log(err))
      
  }

    const [viewData, setViewData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/view1/${id}`).then(({ data }) => {
      setViewData(data);
      console.log(data.image1.data.data);
    });
  }, []);
  return (
    <div className='h'>
      {viewData.image1 && (
          <img
           
            src={`data:image/jpeg;base64,${Buffer.from(
              viewData.image1.data.data
            ).toString("base64")}`}
            width="300px"
            height="auto"
            alt="Error"
           
          />
        )}

      <Typography variant="h5" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id="fullName"
           name='Fname'
           value={inputs.Fname}
           onChange={inpuHandler}

            label="Full Name"
           
           
          /> <br />
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id="address"
            name="Address"
            label="Address"
            value={inputs.Address}
            onChange={inpuHandler}
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            fullWidth
            id="city"
            name="City"
            label="City"
            value={inputs.City}
            onChange={inpuHandler}
           
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            fullWidth
            id="state"
            name="State"
            label="State"
            value={inputs.State}
            onChange={inpuHandler}
            
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            fullWidth
            id="zip"
            name="Zipcode"
            label="ZIP Code"
            value={inputs.Zipcode}
            onChange={inpuHandler}
           
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            required
            fullWidth
            id="no"
            name="Contactno"
            label="Contact no"
            value={inputs.Contactno}
            onChange={inpuHandler}
           
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" onClick={addHandler}>
            Submit
          </Button>
        </Grid>
      </Grid>
   
    </div>
  )
}

export default Buy