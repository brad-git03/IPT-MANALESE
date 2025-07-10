import { useState } from 'react';
import {Button, Container } from 'react-bootstrap';

import React from 'react'

export default function Hook1() {
    let [count, setCount] = useState(0);
    
    function increment(){
        setCount(count += 1);
    }
    function decrement(){
        if(count == 0){
            alert("Count cannot be less than 0");

        }else{
            setCount(count -= 1);    
        }        
    }

  return (
    <Container fluid className='vh-100 d-flex justify-content-center align-items-center flex-column p-5 shadow rounded mt-5'>
    
    <h1 className="display-2 my-5">Count: {count} </h1>
    <Button onClick={e => increment(e)}>Add</Button>
    <Button onMouseOver={e => decrement(e)}>Minus</Button>
    </Container>
    )
}
