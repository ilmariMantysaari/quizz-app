import { Question } from "../App";
import  { useState } from "react";

function arraySet<T>(arr: T[], i: number, val: T){

  const clone = [...arr]
  clone[i] = val;
  return clone;
}

export function QuestionModal(props: {question: Question | undefined, hidden: boolean, setHidden: Function, setAnswered: Function, answered: boolean[]}) {
    const [visibility, setVisibility] = useState([true, true, true, true]);
    const [answer, setAnswer] = useState(true);

    console.log('show modal', props.question);
    console.log('visibilty', visibility);
    
    
    return (
      <>
      <div
        style={{
          backgroundColor: "#BACD92",
          borderRadius: "4px",
          border: "1px solid transparent",
          position: "absolute",
          left: "25%",
          top: "30%",
          width: 700,
          height: 300
        }}
        hidden={props.hidden}
      >
        <h2>{(props.question?.number ?? 0) + 1 }. <span hidden={answer}>{props.question?.title}</span></h2>
        <div style={{
          width: '100%',
          overflow: 'auto',
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          wordBreak: 'break-word',
        }}>

          {props.question?.options.map((opt, i) => {
            console.log('options', opt);
            
            return <div style={{
              width: 100,
              height: 100,
              margin: 10,
              backgroundColor: "#75A47F",
              color: "black",
              float: "left",
              fontWeight: "bold",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              wordBreak: 'break-word',
            }} onClick={() => setVisibility(arraySet(visibility, i, !visibility[i]))}>
              <span className="option-tile" hidden={visibility[i]}>{opt}</span>
              
            </div>
          })}
        </div>
        
        
          <div style={{
            // position: 'relative',
            position: 'absolute',
            width: '100%',
            bottom: '10px',
          }}>
            <button
              style={{marginRight: "10px", float: 'right'}}
              onClick={() => {
                setVisibility([true, true, true, true])
                setAnswer(true)
                props.setHidden(true)
              }}
            > 
              Close
            </button>

            <button
              style={{marginRight: "10px", float: 'right'}}
              onClick={() => {
                setAnswer(false)
                setVisibility([false, false, false, false])
                props.setAnswered(arraySet(props.answered, props?.question?.number ?? 0, true))
            }}>
              Answer
            </button>
          </div>
        </div>

      </>
    )
  }