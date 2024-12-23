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

  const handleFirstCharUpperCaseClick = () => {
  // console.log("Capitalize first character");
  const newText = text.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
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

     const wordCount = text.split(/\s+/).filter((word) => word.length !== 0).length;
     const charCount = text.length;

    
    
  return (
    <div>
        <h2 style={{color: '#002253'}}>Enter the text to analyze below:</h2>
     
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
</div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} style={{margin: '10px'}}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}style={{margin: '10px'}}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleFirstCharUpperCaseClick}style={{margin: '10px'}}>Capitalize First Character</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}style={{margin: '10px'}}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}style={{margin: '10px'}}>Clear Text</button>

    <div className="stats my-2 mx-1" > <p className=" mx-1">Word Count: {wordCount}</p> <p className="my-1 mx-1">Character Count: {charCount}</p></div>
    

  
    {/* <div className="stats" > <p>Word Count: {wordCount}</p> <p>Character Count: {charCount}</p> </div> */}


   

    </div>
  )
}
