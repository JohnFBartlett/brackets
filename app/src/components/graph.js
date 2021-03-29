import React from "react"
import Match from "./match"
import Winner from "./winner"
import * as graphStyles from "./graph.module.css"
import * as service from "../services/service"

export default function Graph(props) {
  let contestants = service.getData()

  let matchups = makeMatchups([], contestants)
  return makeLayout(matchups)

  // let matches = []
  // console.log(matchups)
  // matchups.forEach((matchup, index) => {
  //   // assign each matchup to a layout box
  //   matches.push(<Match key={index} contestants={matchup} points="100"></Match>)
  // })
  // return <div className={graphStyles.gridwrapper}>{matches}</div>
}

function makeMatchups(matchups, contestants) {
  if (contestants.length <= 2) {
    matchups.push(contestants)
    return matchups
  } else {
    let newMatchup = contestants.splice(0, 2)
    console.log(`created matchup: ${JSON.stringify(newMatchup, null, 2)}`)
    matchups.push(newMatchup)
    return makeMatchups(matchups, contestants)
  }
}

function makeLayout(matchups) {
  let numCols = Math.log2(matchups.length * 2) + 1
  let numContestants = matchups.length * 2
  let cols = []
  console.log(`There are ${numCols} columns, and ${matchups.length} matchups`)
  for (let i = 1; i <= numCols; i++) {
    let id = `col${i}`
    let matchBoxes = []
    if (i === numCols) {
      let winnerIndex = `${numCols}_1`
      matchBoxes.push(<Winner key={winnerIndex} points="0"></Winner>)
    } else {
      let limit = numContestants / 2 ** i
      console.log(`limit is ${limit}`)
      for (let j = 1; j <= limit; j++) {
        let matchIndex = `${i}_${j}`
        console.log(`matchIndex: ${matchIndex}`)
        if (i === 1) {
          console.log(`adding match with contestants`)
          let match = (
            <Match
              key={matchIndex}
              contestants={matchups.pop()}
              points="0"
            ></Match>
          )
          matchBoxes.push(match)
        } else {
          console.log("no contestants")
          matchBoxes.push(<Match key={matchIndex} points="0"></Match>)
        }
      }
    }

    console.log(`Made ${matchBoxes.length} matchBoxes in this column`)
    cols.push(
      <div key={i} className={graphStyles.col} id={id}>
        {matchBoxes}
      </div>
    )
  }
  return <div className={graphStyles.gridWrapper}>{cols}</div>
}
