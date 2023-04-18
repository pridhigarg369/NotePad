import {useState, useEffect ,React} from "react";
import axios from "axios";
const Notes = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //    API : "http://localhost:3000/notepad",
  //    note:[],
  //    Error:"",
  //    display:"False" ,
  // }
  // }
const [note,setNote]=useState([]);
const [Error, setError]=useState("");
const [message, setmessage]=useState('');
// const [display, setdisplay]=useState("False");
// const [API, setapi] = ("http://localhost:3000/notepad");

const getApi = async()=>{
  try{const res =await  axios.get("http://localhost:3000/notepad/Note");
  setNote(res.data.notes);}
  catch(err){
    setError(err.message);
  }
}
const DelNote = async(event,id)=>{
  event.preventDefault();
  const i={_id: id};
  console.log(i);
  try{await axios.delete('http://localhost:3000/notepad/Note',i).then(result=>{setmessage(result.data.msg);});}
  catch(error){
    alert(`Invalid Request: ${error}`);
  }
  await console.log(message);
}
// function getApi(url){
//   axios.get("http://localhost:3000/notepad/Note")
//   .then((res)=>{setNote(res.data.notes)})
//   .catch((err)=>{
//     setError(err.message);
//       });
// }
useEffect(()=>{
  // axios.get("http://localhost:3000/notepad/Note")
  // .then((res)=>{setNote(res.data.notes)})
  // .catch((err)=>{
  //   setError(err.message);
  //     });
 // console.log(this.state.API);
  getApi();
}, [note]);
  return (
    <div className="grid">

{Error !== "" && alert(`Invalid Request: ${Error}`)}
{note.map((post)=>{
  const{note,title,_id}=post;
  return(
      <div className="note" key={_id} >
      <div className="title" > <h1 >{title.toUpperCase()}</h1></div>
      <br/> <p >
      {_id}
       {note}
       </p>
       <button type="button" onClick={event=> DelNote(event, _id)}>_DELETE_</button>
     </div>  
  ); 
}
)}
</div>
  );
};
export default Notes;
