import React from "react"
import * as headerStyles from "./header.module.css"

export default function Tree(props) {
  let root = props.root
  if (root.name && root.children) {
    treeShape = getTreeShape(root, new Map(), new Map())
  }
  let style = getStyleFromSituation(props.status)
  if (root.name && root.name.length > 0) {
    line = "_".repeat(root.name.length)
    let mainBranch = makeBranch(root.name, style)
  }
  return <span style={style}>_____</span>
}

function getTreeShape(currentBranch, detailMap, layerMap) {
  let shape = {
    height: 3,
    name: currentBranch.name,
    status: currentBranch.status,
    children: [],
  }
  // TODO: detail map is index per branch
  // layermap is layer -> [indexes]
  currentBranch.children.array.forEach(child => {
    let childShape = getTreeShape(child)
    shape.height += childShape.height
    shape.children.push(childShape)
  })
  return shape
}

function displayTree(tree) {
  let branch = makeBranch(tree, getStyleFromSituation(tree.status))
  if (tree.children) {
    //   make divider
    // gather child trees and put them in one div that is horizontally spaced

    trees
  }
}

function makeBranch(name, style) {
  let line = "_".repeat(name.length)
  return (
    <div>
      <p> {props.name}</p>
      <span style={style}>{line}</span>
    </div>
  )
}

function getStyleFromSituation(status) {
  if (status == "Incorrect") {
    return { color: "red" }
  } else if (status == "Correct") {
    return { color: "green" }
  } else if (status == "Actual") {
    return { "font-weight": "bold" }
  } else {
    return {}
  }
}
