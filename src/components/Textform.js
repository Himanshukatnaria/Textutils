import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState('');

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        
        setText(newText)
    }

    const handleLoClick=()=>{
        
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleCopyText=()=>{
      navigator.clipboard.writeText(text);
      alert("Text Copied ");
      //  console.log("Text copied to clipboard");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  }

    const handleclearClick=()=>{
        let newText = '';
        setText(newText)

    }
    
        const handleOnChange=(event)=>{
            console.log("On Change");
            setText(event.target.value);
    
}
    
    
  return (
    <div>
        <h2 style={{color: '#002253'}}>Enter the text to analyze below:</h2>
     
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary" onClick={handleLoClick} style={{margin: '10px'}}>Convert to lowercase</button>
    <button className="btn btn-primary" onClick={handleExtraSpaces}style={{margin: '10px'}}>Remove Extra Spaces</button>
    
    <button className="btn btn-primary" onClick={handleCopyText}style={{margin: '10px'}}>Copy Text</button>
    
    <button className="btn btn-primary" onClick={handleclearClick}>Clear Text</button>

  
    


   

    </div>
  )
}
