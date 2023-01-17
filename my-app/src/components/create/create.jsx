import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


function Create(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const sendDataToApi=()=>{
        axios.post('https://63c12aad716562671874341e.mockapi.io/crud',
       { firstName,
        lastName})
    } 
    return (
        <>
        <div>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input name='fname' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input name='lname' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
            </Form.Field>
            <Button type='submit' onClick={sendDataToApi} >Submit</Button>
        </Form>
        </div>
        </> 
    )
}
export default Create