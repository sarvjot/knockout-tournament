import React from "react";

export default function Form({ addPlayer }) {
    const [playerName, setPlayerName] = React.useState("");

    function handleChange(e){
        setPlayerName(e.target.value);
    }

	function handleSubmit(e) {
		e.preventDefault();
		addPlayer(playerName);
        setPlayerName("");
	}

	return (
		<form>
			<input className="name-input" type="text" placeholder="Enter Name" value={playerName} onChange={handleChange}></input>
			<button className="add-card-button button-styles" onClick={handleSubmit}>
				Add Player
			</button>
		</form>
	);
}
