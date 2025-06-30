import { useEffect, useState } from "react";
import { patchVotes} from "../App";

const VoteControl = ({article_id}) => {
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(0);

 useEffect(() => {
    setVoteCount(0)
},[article_id])

  function handleVote(newVote){
    const voteChange = newVote === userVote? -newVote : newVote - userVote
    setVoteCount((currentVote) => currentVote + voteChange)
    setUserVote (newVote === userVote ? 0 : newVote )

    patchVotes(article_id, voteChange)
    .catch(() => {
      setVoteCount((currentVote) => currentVote - voteChange)
      setHasVoted (userVote)
    })
  }

  return (
    <div>
      
      <button onClick={() => handleVote(1)}>Like</button>
      <p>Votes: {voteCount}</p>
      <button onClick={() => handleVote(-1)}>Dislike</button>
    </div>
  )

};

export default VoteControl;