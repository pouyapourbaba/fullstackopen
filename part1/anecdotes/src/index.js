import React, { useState } from "react";
import ReactDOM from "react-dom";

const PopularAnecdote = ({ anecdotes, votes }) => {
  const maxVote = Math.max(...votes);
  const maxIndex = votes.indexOf(maxVote);

  return (
    <div>
      <h1>Anecdote with the moste votes</h1>
      {maxVote !== 0 && (
        <div>
          <p>{anecdotes[maxIndex]}</p>
          <p>has {maxVote} votes</p>
        </div>
      )}
    </div>
  );
};

const App = ({ anecdotes }) => {
  const lengthOfAnecdotes = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(lengthOfAnecdotes).fill(0));

  const nextAnecdote = () => {
    const rand = Math.floor(Math.random() * lengthOfAnecdotes);
    setSelected(rand);
  };
  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <PopularAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
