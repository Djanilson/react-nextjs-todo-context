import React from "react";

import {TodosProvider} from "../context/TodosProvider";
import Header from "../components/header";
import Todos from "../components/todos";
import Footer from "../components/footer";

// function uuidv4() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }

export default function Home() {
  return (
    <TodosProvider>
      <div className="container">
        <h1 className="app-title">TO DO LIST</h1>
        <hr />
        <Header />
        <Todos />
        <hr />
        <Footer />
      </div>
    </TodosProvider>
  )
}
