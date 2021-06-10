import React, { useState ,useEffect} from 'react';
import 'tachyons';
import './Demo.css';
import Navbar from './Navbar'
import Todo from './Todo';
import Addtodo from './Addtodo';
import About from './About'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Demo() {
  

    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
        console.log(`deleting todo`, todo)
    }
    const addtodo = (name, disc) => {
        console.log('Adding this todo : ', name, disc)
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            name: name,
            disc: disc,

        }
        setTodos([...todos, myTodo])
        console.log(myTodo)
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos])

    

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    
                    <Route exact path="/raffayreactapp" render={() => {
                        return (
                            <>
                                <Addtodo addtodo={addtodo} />
                                <Todo todos={todos} onDelete={onDelete} />
                            </>)
                    }}>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </div >


    )
}