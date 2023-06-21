import React, { useState } from "react";

export default function Text(props: any) {
  const row: any = 8;
  const [text, setText] = useState("");

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  const onUpClick = () => {
    setText(text.toUpperCase());
  };

  const onLoClick = () => {
    setText(text.toLowerCase());
  };

  const onClearClick = () => {
    setText(' ');
  };

  const onClearWhiteSpaceClick = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(' '));
  };

  return (           
    <>    
    <div className="container" style={{color : props.mode === 'dark' ? "white":"#042743" }}>
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark' ? "gray":"white",color : props.mode === 'dark' ? "white":"#042743" }} id="form" rows={row} onChange={onChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={onUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={onLoClick}>LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={onClearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={onClearWhiteSpaceClick}>Remove White Space</button>
    </div>
    <div className="container" style={{color : props.mode === 'dark' ? "white":"#042743" }}>
      <h1>Your Text Summery</h1>
      <p>{text.split(" ").length} words and {text.length} total character</p>
      <p>{0.008 * (text.split(" ").length)} minites to read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>                 
  );
}
