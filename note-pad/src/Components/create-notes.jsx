import React from "react";
import { useState , useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function Create() {
const [Title, settitle]=useState('');
const [Note, setnote]=useState('');
const [message, setmessage]=useState('');

  // const onSubmit=async ()=>{
  //   try{ axios.get('http://localhost:3000/notepad/Note').then((res)=>setResponse(res.data.notes));
  //   console.log(setResponse);
  // //  return setResponse(note.data);
  // }catch(err){
  //   console.log(err);
  // }

  // useEffect(()=>{
  //   try{ axios.get('http://localhost:3000/notepad/Note').then((res)=>setResponse(res.data.notes));
  //  // console.log(setResponse);
  // //  return setResponse(note.data);
  // }catch(err){
  //   console.log(err);
  // }
  // });
  const handlenote=(event)=>{
    const n= event.target.value;
    console.log(n);
    setnote(n);
  }

  const handletitle=(event)=>{
    const t= event.target.value;
    //console.log(t);
    settitle(t);
  }
const submitNote= async(event)=>{
  event.preventDefault();
  const notedata = { title:Title, note:Note};
  try{await axios.post('http://localhost:3000/notepad/Note',notedata).then(result=>{setmessage(result.data.msg);});}
  catch(error){
    alert(`Invalid Request: ${error}`);
  }
  await console.log(message);


}
  return (<>
  <br/><br/>
    <div className="createForm">
    <br/><h1>Add Notes</h1><hr />
    <Form onSubmit={submitNote}>
    <Form.Group  className="mb-2" controlId="formTitle">
    <Form.Label column="lg" lg={2}>*Title</Form.Label>
    <Form.Control type="text" onChange={(e)=>handletitle(e)} placeholder="Enter title" />
    </Form.Group>
    <Form.Group  className="mb-3" controlId="formNote">
    <Form.Label>*Note</Form.Label>
    <Form.Control placeholder="Add Text" onChange={(e)=>handlenote(e)} />
    </Form.Group>
    {/* <Form.Text className="text-muted">
    Fields that are marked with asterisk(*) are compulsory.
    </Form.Text> */}
    <Button variant="primary" type="submit" >
        Submit
    </Button>
{/* <p className="forgot-password text-right">
     <a href="login"to="/login">Already registered? sign in?</a>
</p> */}
</Form>

{/* 
{response.map((post)=>{
  const {title,note , _id}=post;

  return (
    <div className="card" key={_id}>
      <h2>{title}</h2>
      <h4>{note}</h4>
    </div>
  );
})} */}
</div>
<br/> <br/><br/><br/><br/><br/><br/><br/><br/>
</>
  );
}

export default Create;
