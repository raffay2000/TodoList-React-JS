import React, { useState, useEffect } from "react";
import "tachyons";
import "./App.css";
import Navbar from "./myComponents/Navbar";
import Todo from "./myComponents/Todo";
import Addtodo from "./myComponents/Addtodo";
import Footer from "./myComponents/Footer";
import About from "./myComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log(`deleting todo`, todo);
  };
  const addtodo = (name, disc) => {
    console.log("Adding this todo : ", name, disc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      name: name,
      disc: disc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/raffayreactapp"
            render={() => {
              return (
                <>
                  <Addtodo addtodo={addtodo} />
                  <Todo todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
