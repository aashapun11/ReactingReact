import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was Clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase is formed", "success");
  }
  const handleLwClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase is formed","success");


  }
  const speak = () =>{
   let newText = '';
   setText(newText);
   props.showAlert("Text has been cleared","success");
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  } 
  const[text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="textBox" cols="30" rows="10"></textarea>
      <br />
      <button className='btn btn-success mx-2' onClick={handleLwClick} >Click me for Lower Case</button>
      <button className='btn btn-primary mx-2' onClick={handleUpClick} >Click me for higher Case</button>
      <button type='submit' className='btn btn-warning' onClick={speak}>Click and Clear</button>
 
    </div>
 
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>We are counting words and letters</h1>
      <p>{text.split(" ").length-1} words  and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read these words</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
