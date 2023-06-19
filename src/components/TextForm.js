import { useState } from "react";
export default function TextForm(props) {

    const [text, state] = useState("")

    const onChange = (event) => {
        state(event.target.value)
    }

    const onUpperCase = () => {
        state(text.toUpperCase())
    }
    return (
        <>
            <div className="containre">
                <h1>{props.Text}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={onChange} value={text} id="form" rows="8"></textarea>
                </div>
                <button onClick={onUpperCase} className="btn btn-primary mb-3">Confirm identity</button>
            </div>
            <div className="containre">
                <h1>Preview</h1>
                <p>{text.split(" ").length - 1} words and {text.length} total character</p>
                <p>{0.008 * (text.split(" ").length - 1)} minites to read</p>
                <p>{text}</p>
            </div>
        </>
    )
}
