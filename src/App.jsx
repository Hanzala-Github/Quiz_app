import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Timer, Trivia, Start } from "./components/index";

function App() {
  // ......This is the variables and functions return part...........//
  const [questionNumber, setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );
  const data = [
    {
      id: 1,
      question: "What is the hardest naturally occurring substance on Earth?",
      answers: [
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Iron",
          correct: false,
        },
        {
          text: "Diamond",
          correct: true,
        },
        {
          text: "Platinum",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the capital city of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Brisbane",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who wrote the play 'Hamlet'?",
      answers: [
        {
          text: "Leo Tolstoy",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is the chemical symbol for the element oxygen?",
      answers: [
        {
          text: "Ox",
          correct: false,
        },
        {
          text: "O2",
          correct: false,
        },
        {
          text: "O",
          correct: true,
        },
        {
          text: "Om",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which artist painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent Van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "In what year did the Titanic sink?",
      answers: [
        {
          text: "1905",
          correct: false,
        },
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1920",
          correct: false,
        },
        {
          text: "1930",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the smallest country in the world?",
      answers: [
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Nauru",
          correct: false,
        },
        {
          text: "San Marino",
          correct: false,
        },
        {
          text: "Vatican City",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which planet is closest to the sun?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
        {
          text: "Venus",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who developed the theory of relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which element has the atomic number 1?",
      answers: [
        {
          text: "Helium",
          correct: false,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Hydrogen",
          correct: true,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the largest ocean on Earth?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which organ in the human body is primarily responsible for pumping blood?",
      answers: [
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Lungs",
          correct: false,
        },
        {
          text: "Heart",
          correct: true,
        },
        {
          text: "Kidney",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which famous scientist introduced the concept of natural selection?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Charles Darwin",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which gas is most abundant in the Earth's atmosphere?",
      answers: [
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Hydrogen",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: true,
        },
        {
          text: "Carbon Dioxide",
          correct: false,
        },
      ],
    },
  ];
  

  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  // ........This is the JSX return part......//
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            <h1
              style={{
                textAlign: "center",
                paddingTop: "2rem",
                fontWeight: "500",
                color: "#e9e6e6",
              }}
            >
              {userName} playing the game : ✔
            </h1>

            {stop ? (
              <h1 className="total_earned">Your earned : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
