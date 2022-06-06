import React from "react"
import image from "./images/user-solid.svg"

export default function Card({name, eliminatePlayer}){
    return (
        <div className="card">
            <img className="profile-image" src={image} alt="Player Profile"></img>
            <p className="player-name" >{name}</p>
            <button className="button-styles eliminate-button" onClick={eliminatePlayer}>Eliminate</button>
        </div>
    )
}