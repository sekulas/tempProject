import './App.css';
import Head from './components/Head'
import Content from './components/Content'
import {data} from "./temperamentData"
import ReactDOM from "react-dom/client"


function App() {

  let choleryk = 0;
  let sangwinik = 0;
  let melancholik = 0;
  let flegmatyk = 0
  let i = 0;

  const questions = data.map(e => {
    i++
    return (
      <Content 
        key={i} 
        question={e.question} 
      />
    )
  })

  return (
    <div className="App">

      <Head />
      {questions}
      
    </div>
  );
}

export default App;
