import './App.css';
import Head from './components/Head'
import Content from './components/Content'
import {data} from "./temperamentData"
import SubmitButton from './components/SubmitButton';
import { useState } from 'react';


function App() {

  const [resultsShouldBeShown, showResults] = useState(false);

  let choleric = 0;
  let sanguine = 0;
  let phlegmatic = 0
  let melancholic = 0;

  let isTheQuestionChecked = Array(2).fill(false);

  const handleChange = (index) => {
    isTheQuestionChecked[index] = !isTheQuestionChecked[index];
  }

  const questions = data.map((e, index) => {

    console.log(index);
    
    return (
      <Content 
        key={e.question}
        question={e.question} 
        onChange={() => handleChange(index)}
      />
    )
  })
  
  const handleSubmit = () => {

    console.log("start")

    questions.forEach((_e, index) => {
      if(isTheQuestionChecked[index] === true) {
        choleric += Number(data[index].points[0]);
        sanguine += Number(data[index].points[1]);
        phlegmatic += Number(data[index].points[2]);
        melancholic += Number(data[index].points[3]);
      }
    })

    console.log({phlegmatic});

    showResults(resultsShouldBeShown => !resultsShouldBeShown);

  }

  return (
    <div className="App">

      <Head />
      {questions}
      <SubmitButton onClick={handleSubmit}/>
      {resultsShouldBeShown
        &&
        <ul>
          <ol>choleric: {choleric}</ol>
          <ol>sanguine: {sanguine}</ol>
          <ol>phlegmatic: {phlegmatic}</ol>
          <ol>melancholic: {melancholic}</ol>
        </ul>
      }
      
    </div>
  );
}

export default App;
