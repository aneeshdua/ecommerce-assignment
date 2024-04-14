import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import ListPage from './components/layouts/ListingPage/ListPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/layouts/ProductPage/ProductPage';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className='headerCtn'>
          <Header/>
        </div>
        <div className='bodyCtn'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ListPage />}/>
              <Route path="/:id" element={<ProductPage />}/>
            </Routes>
          </BrowserRouter>
        </div>    
        <footer className='footerCtn'>
          <Footer/>
        </footer>
      </StyledEngineProvider>
    </>
  );
}

export default App;
