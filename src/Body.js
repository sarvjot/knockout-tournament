import React from "react"
import Card from "./Card"
import {nanoid} from "nanoid"

export default function Body({players, eliminatePlayer}){
    let cards = players.map(player => <Card name={player} key={nanoid()} eliminatePlayer={() => eliminatePlayer(player)}/>);

    return (
        <div className="body">
            {cards}
        </div>
    )
}