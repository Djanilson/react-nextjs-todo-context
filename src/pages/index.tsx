import React from "react";

import {TodosProvider} from "../context/TodosProvider";
import Header from "../components/header";
import Todos from "../components/todos";
import Footer from "../components/footer";

export default function Home() {
  return (
    <TodosProvider>
      <div className="container">
        <h1 className="app-title">TO DO LIST</h1>
        <hr />
        <Header />
        <Todos />
        <Footer />
      </div>
    </TodosProvider>
  )
}
