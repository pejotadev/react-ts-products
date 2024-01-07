
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Products } from './Pages/Products';
import { DataContextProvider } from './Context/DataContext';
import { Header } from './Components/Header/Header';
import { Product } from './Components/Product/Product';

function App() {

  return (
    <BrowserRouter>
        <DataContextProvider>
          <main>
            <Header />
            <Routes>
              <Route path="/" Component={Products}/>
              <Route path="/:id" Component={Product}/>
            </Routes>
          </main>
        </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;


/**   <div className="container">
      <BrowserRouter>
        <DataContextProvider>
          <main>
            <Header />
            <Routes>

            </Routes>
          </main>
        </DataContextProvider>
      </BrowserRouter>
    </div> */