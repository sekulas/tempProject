import './App.css';
import Head from './components/Head'
import Content from './components/Content'
import {data} from "./temperamentData"
import SubmitButton from './components/SubmitButton';


function App() {

  let choleric = 0;
  let sanguine = 0;
  let phlegmatic = 0
  let melancholic = 0;

  const questions = data.map(e => {
    return (
      <Content 
        key={e.question} 
        question={e.question} 
      />
    )
  })

  const whenSubitted = () => {
    
  }

  return (
    <div className="App">

      <Head />
      {questions}
      <SubmitButton />

    </div>
  );
}

export default App;
