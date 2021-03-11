import Header from "../components/header";
import Todos from "../components/todos";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}
