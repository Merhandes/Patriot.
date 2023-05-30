import React, { Fragment, useState, useContext } from "react";

import {
  renderHTML,
  scrollToElem,
  handleChosenAnswer,
  calculateResult
} from "../components/utilities";
import { Store, useAppContext } from "../components/AppContext";

import "../dist/css/quiz.css";

import data from "../components/data.json";

const correctAnswers = [2, 3, 2, 2, 0, 2, 1, 2, 1, 2];
const totalQuestions = data.results.length;

export default function App() {
  const [chosenAnswers, setChosenAnswers] = useState([]);

  function renderQuestions() {
    return data.results.map((result, index) => (
      <Question key={index} result={result} index={index} />
    ));
  }

  return (
    <Store.Provider value={{ chosenAnswers, setChosenAnswers }}>
      <Start />
      {renderQuestions()}
      <Finish />
    </Store.Provider>
  );
}

/**
 * Renders questions, answers and buttons to progress.
 *
 * @param {{results: any, index: number}} props
 */
export function Question({ result, index }) {
  return (
    <section id={`question-${index}`} className="fullpage-center">
      <h3>
        {index + 1}. {renderHTML(result.question)}
      </h3>
      <div className="answers">
        <Answers result={result} parentIndex={index} />
      </div>
      <section className="btn-group" style={{ display: "flex" }}>
        {index !== 0 && (
          <Button
            text="Soal Sebelumnya"
            func={() => scrollToElem(`question-${index - 1}`)}
          />
        )}
        {index !== totalQuestions - 1 && (
          <Button
            text="Soal Berikutnya"
            func={() => scrollToElem(`question-${index + 1}`)}
          />
        )}
        {index === totalQuestions - 1 && (
          <Button text="Selesai" func={() => scrollToElem("finish")} />
        )}
      </section>
    </section>
  );
}

/**
 * Combine correct and incorrect answers, sort them in alphabetical order
 * then return radio buttons.
 *
 * @param {{result:{}, parentIndex:number}} props
 */
export function Answers({ result, parentIndex }) {
  const combinedAnswers = [...result.incorrect_answers, result.correct_answer];
  combinedAnswers.sort(); // Sort to alphabetical order
  return combinedAnswers.map((answer, index) => (
    <Answer
      key={index}
      answer={answer}
      index={index}
      parentIndex={parentIndex}
    />
  ));
}

function Answer({ answer, index, parentIndex }) {
  const { chosenAnswers, setChosenAnswers } = useAppContext();
  return (
    <Fragment>
      <input
        type="radio"
        name={`question-${parentIndex}`}
        onChange={(element) =>
          setChosenAnswers(
            handleChosenAnswer(element, parentIndex, chosenAnswers)
          )
        }
        value={index}
      />
      {renderHTML(answer)}
      <br />
    </Fragment>
  );
}

/**
 * Saves me from writing type button over and over.
 *
 * @param {{text: string, func: () => {}}} props
 */
function Button({ text, func }) {
  return (
    <button type="button" onClick={func}>
      {text}
    </button>
  );
}

function Start() {
  return (
    <section className="fullpage-center" id="start">
      <h1>Waktunya Quiz!!!</h1>
      <h2>Seberapa banyak yang kamu ketahui tentang pahlawan Indonesia?</h2>
      <Button text="Ayo Mulai" func={() => scrollToElem("question-0")} />
    </section>
  );
}

function Finish() {
  const { chosenAnswers } = useContext(Store);
  const textCompleted = (
    <Fragment>
      <h3>Selamat!</h3>
      <h4>
        Kamu mendapatkan skor {calculateResult(correctAnswers, chosenAnswers)}{" "}
        dari total skor {totalQuestions}
      </h4>
      <Button text="Mulai Lagi" func={() => window.location.reload()} />
    </Fragment>
  );

  const textIncomplete = (
    <Fragment>
      <h4>Sepertinya kamu belum menjawab semua pertanyaan</h4>
      <p>Scroll ke atas untuk melihat pertanyaan mana yang kamu lewatkan</p>
    </Fragment>
  );

  /** Questions answered out of sequence will cause array to have `undefineds`
   * this variable counts the length with those filtered out
   */
  const answeredQuestions = chosenAnswers.filter((ar) => ar !== undefined)
    .length;

  return (
    <section className="fullpage-center" id="finish">
      {answeredQuestions === totalQuestions ? textCompleted : textIncomplete}
    </section>
  );
}
