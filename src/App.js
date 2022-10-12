import './App.css';
import Head from './components/Head'
import Content from './components/Content'
import {data} from "./temperamentData"
import SubmitButton from './components/SubmitButton';
import { useState } from 'react';


function App() {

  const [resultsShouldBeShown, showResults] = useState(false);
  const [choleric, setCholeric] = useState(0);
  const [sanguine, setSanguine] = useState(0);
  const [phlegmatic, setPhlegmatic] = useState(0);
  const [melancholic, setMelancholic] = useState(0);

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
        setCholeric(choleric => choleric + Number(data[index].points[0]));
        setSanguine(sanguine => sanguine + Number(data[index].points[1]));
        setPhlegmatic(phlegmatic => phlegmatic + Number(data[index].points[2]));
        setMelancholic(melancholic => melancholic + Number(data[index].points[3]));
      }
    })

    console.log({choleric});

    showResults(resultsShouldBeShown => !resultsShouldBeShown);

  }

  if(resultsShouldBeShown) {
    return (
      <ul className="results">
        <ol>choleric: {choleric}</ol>
        <ol>sanguine: {sanguine}</ol>
        <ol>phlegmatic: {phlegmatic}</ol>
        <ol>melancholic: {melancholic}</ol>
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
