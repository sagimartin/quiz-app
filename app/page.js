export default function Home() {
  return (
    <div className="quiz-app">
      <div className="quiz-header">
        <h1>Quiz App</h1>
      </div>
      <div className="quiz-body">
        <h1> 1. Question ere</h1>
        <div className="options">
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button>Answer 4</button>
        </div>
      </div>
      <div className="quiz-footer">
        <p>1 out of 5</p>
        <button className="next">Next</button>
      </div>
    </div>
  );
}
