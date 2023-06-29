import { Route, BrowserRouter, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";

import SecondPage from "./components/SecondPage";
import RefComponent from "./components/RefComponent";
import ControlledComponent from "./components/ControlledComponent";
import CounterComponent from "./components/CounterComponent";
import TodoList from "./components/TodoList";
import HeaderComponent from "./components/HeaderComponent";
import RecetasList from "./components/recetas/RecetasList";

function App() {
  return (
   
    <BrowserRouter>
     <HeaderComponent />
      <main className="w-screen h-screen bg-white flex flex-col items-center justify-center">
       
        <Routes>
          <Route path="/hola-mundo" exact element={<HelloWorld />} />
          <Route path="/otra-pagina" exact element={<SecondPage />} />
          <Route path="/ref" exact element={<RefComponent />} />
          <Route path="/componente-controlado" exact element={<ControlledComponent />} />
          <Route path="/contador" exact element={<CounterComponent />} />
          <Route path="/todo" exact element={<TodoList />} />
          <Route path="/recetas" exact element={<RecetasList title="Total de recetas" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;