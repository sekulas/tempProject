import './App.css';
import Head from './components/Head'
import Content from './components/Content'
import {data} from "./temperamentData"
import SubmitButton from './components/SubmitButton';
import { useState } from 'react';


function App() {

  const [resultsShouldBeShown, showResults] = useState(false);
  const [temperaments, updateTemperaments] = useState(
    {
      choleric: 0,
      sanguine: 0,
      flegmatic: 0,
      melancholic: 0
    }
  );
  
  let isTheQuestionChecked = Array(2).fill(false);

  const handleChange = (index) => {
    console.log("handlingChange");
    isTheQuestionChecked[index] = !isTheQuestionChecked[index];
  }

  const questions = data.map((e, index) => {

    console.log("generatin questions", index);
    
    return (
      <Content 
        key={e.question}
        question={e.question} 
        onChange={() => handleChange(index)}
      />
    )
  })
  
  const handleSubmit = () => {

    console.log("submitting");

    questions.forEach((_e, index) => {

      if(isTheQuestionChecked[index] === true) {
        updateTemperaments(temperaments => {return {...temperaments, choleric: temperaments.choleric + Number(data[index].points[0])}});
        updateTemperaments(temperaments => {return {...temperaments, choleric: temperaments.sanguine + Number(data[index].points[1])}});
        updateTemperaments(temperaments => {return {...temperaments, choleric: temperaments.flegmatic + Number(data[index].points[2])}});
        updateTemperaments(temperaments => {return {...temperaments, choleric: temperaments.melancholic + Number(data[index].points[3])}});
      }
    })

    showResults(resultsShouldBeShown => !resultsShouldBeShown);

  }

  if(resultsShouldBeShown) {
    return (
      <ul id="results">
        <ol>choleric: {temperaments.choleric}</ol>
        <ol>sanguine: {temperaments.sanguine}</ol>
        <ol>flegmatic: {temperaments.flegmatic}</ol>
        <ol>melancholic: {temperaments.melancholic}</ol>
      </ul>
    )
  }
  else {
    return (
      <div className="App">
        <Head />
        {questions}
        <SubmitButton onClick={handleSubmit}/>
      </div>
    );
  }
}

export default App;
