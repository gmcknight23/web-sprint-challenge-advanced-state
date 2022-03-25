import React, { useEffect } from "react";
import { fetchQuiz, selectAnswer } from "../state/action-creators";
import { connect } from "react-redux";

function Quiz({ quiz, questionFetch, answerSet, selectedAnswer }) {
  useEffect(() => {
    questionFetch();
  }, []);
  console.log(selectedAnswer);
  const handleClick = (answerID) => {
    //update state of selectedAnswer to be the answerID
    //send action object to reducer
    //action object needs type and payload
    // TODO: invoke dispatch function
    answerSet(answerID);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div
                className={
                  selectedAnswer === quiz.answers[0].answer_id
                    ? "answer selected"
                    : "answer"
                }
              >
                {quiz.answers[0].text}
                <button onClick={() => answerSet(quiz.answers[0].answer_id)}>
                  {selectedAnswer === quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div
                className={
                  selectedAnswer === quiz.answers[1].answer_id
                    ? "answer selected"
                    : "answer"
                }
              >
                {quiz.answers[1].text}
                <button onClick={() => answerSet(quiz.answers[1].answer_id)}>
                  {selectedAnswer === quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { quiz: state.quiz, selectedAnswer: state.selectedAnswer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    questionFetch: () => dispatch(fetchQuiz()),
    answerSet: (answerID) => dispatch(selectAnswer(answerID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
