import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" style={{ fontFamily: "Poppins" }}>
      <Header />
      <main style={{ minHeight: "92vh" }}>
        <Todo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
