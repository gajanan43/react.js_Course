import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className='container my-3' style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
