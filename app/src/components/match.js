import React from "react"
import * as matchStyles from "./match.module.css"

export default function Match(props) {
  let contestants = props.contestants || [
    {
      name: "",
      seed: "",
    },
    {
      name: "",
      seed: "",
    },
  ]
  console.log(`contestants: ${JSON.stringify(contestants, null, 2)}`)
  if (contestants && contestants.length === 2) {
    let first = contestants[0]
    let second = contestants[1]
    return (
      <div className={matchStyles.matchup}>
        <div className={matchStyles.entry}>
          <span>
            {first.seed} | {first.name}
          </span>
          <br></br>
          <span>
            {second.seed} | {second.name}
          </span>
        </div>
        <div className={matchStyles.score}>{props.points || 0}</div>
      </div>
    )
  }
}
