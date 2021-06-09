import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

export const Addtodo = ({ addtodo }) => {
        const [name, setName] = useState("");
        const [disc, setDisc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!name || !disc) {
            alert("name or discription cannot be blank");
        }
        else {
            addtodo(name, disc);
            setName("");
            setDisc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Todo name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="disc" className="form-label">Todo discription</label>
                    <input type="text" value={disc} onChange={(e) => setDisc(e.target.value)} className="form-control" id="disc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
export default Addtodo;