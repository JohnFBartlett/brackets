import React from "react"
import * as winnerStyles from "./winner.module.css"

export default function Winner(props) {
  let winner = props.contestant || {
    name: "",
    seed: "",
  }
  console.log(`winner: ${JSON.stringify(winner, null, 2)}`)
  if (winner) {
    return (
      <div className={winnerStyles.matchup}>
        <div className={winnerStyles.entry}>
          <span>
            {winner.seed} | {winner.name}
          </span>
        </div>
        <div className={winnerStyles.score}>{props.points || 0}</div>
      </div>
    )
  }
}
