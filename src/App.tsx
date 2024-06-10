import { useState } from 'react'
import './App.css'
import { QuestionModal } from './components/QuestionModal'

export type Question = {
  title: string,
  number?: number,
  header?: string
  options: [string, string, string, string]
}

const qst:  Question[] = [
  // questions redacted
  // {
  //   title: '',
  //   options: ["", "", "", ""],
  // },
  


]

const shuffle = (arr: any[]) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffle(qst).concat([  {
  // examples
  title: "Sandelsin ainesosia",
  header: "Esim",
  options: ["Vesi", "Ohratärkkelys", "Ohramallas", "Humala"],
},
{
  title: "macOS versioita",
  header: "Esim 2.",
  options: ["Leopard", "Tiger", "Mojave", "Big Sur"],
},]);

function App() {

  const [showModal, setShowModal] = useState(true);
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [answered, setAnswered] = useState(questions.map(() => false));

  const openModal = (number: number, q: Question): undefined => {
    setShowModal(false);
    setQuestion({...q, number});
  }
  

  return (
    <>
      
      <h1>Visa</h1>
      <div style={{ width: 700}}>
        {
          questions.map((q, i) => 
            <div
              onClick={() => openModal(i, q)}
              style={{
                width: 50,
                height: 50,
                float: "left",
                margin: 10,
                color: "black",
                backgroundColor: answered[i] ? "#BACD92": "#75A47F",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                wordBreak: 'break-word',
                fontWeight: 'bold'
              }}
            >
              {q.header ?? i+1}
            </div>
          )
        }
        <div>
          <QuestionModal
            hidden={showModal}
            setHidden={setShowModal}
            setAnswered={setAnswered}
            answered={answered}
            question={question}>
          </QuestionModal>
        </div>
      
      </div>
    </>
  )
}



export default App
