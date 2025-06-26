import './App.css';
import Header from './components/Header';
import ArticlePage from './components/ArticlePage';
import Homepage from './components/HomePage'
import { Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="app">
        <Header/>
        <main>
        <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/articles/:article_id" element={<ArticlePage/>}/>
       </Routes>
       </main>
    </div>
  )
}

export default App
