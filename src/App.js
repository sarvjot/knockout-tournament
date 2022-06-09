import React from "react";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
import {nanoid} from "nanoid";
import randomColor from "randomcolor";

export default function App() {
	const [players, setPlayers] = React.useState(JSON.parse(localStorage.getItem('players')) || []);

	function addPlayer(name) {
		setPlayers((prevPlayers) => [
			...prevPlayers,
			{
                id: nanoid(),
				name: name,
                color: randomColor({
                    luminosity: "bright",
                }),
			},
		]);
	}

	function eliminatePlayer(delete_player) {
		setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== delete_player.id));
	}

    React.useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]); 

	return (
		<main className="app-container">
			<Header />
			<Body players={players} eliminatePlayer={eliminatePlayer} />
			<Form addPlayer={addPlayer} />
		</main>
	);
}
