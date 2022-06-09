import React from "react";

export default function Card({ name, color, eliminatePlayer }) {
	return (
		<div className="card">
			<svg
				className="profile-image"
				alt="Player Profile"
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="294.000000pt"
				height="294.000000pt"
				viewBox="0 0 294.000000 294.000000"
				preserveAspectRatio="xMidYMid meet"
			>
				<g transform="translate(0.000000,294.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
					<path
						fill={color}
						d="M1356 2920 c-401 -63 -691 -328 -791 -726 -111 -435 17 -947 340
-1359 124 -159 323 -326 442 -371 l42 -16 -69 -91 c-39 -49 -69 -92 -66 -94 2
-2 23 1 47 6 24 6 64 11 89 11 l45 0 -3 -88 c-2 -48 0 -110 5 -137 l8 -50 44
-3 c23 -2 41 1 38 6 -12 17 -26 168 -20 210 7 49 14 51 98 22 32 -11 60 -19
62 -17 1 2 -12 49 -31 104 l-34 100 52 16 c329 105 721 654 816 1145 25 129
27 375 5 505 -75 426 -348 728 -738 813 -86 19 -298 27 -381 14z"
					/>
				</g>
			</svg>

			<p className="player-name">{name}</p>

			<button className="button-styles eliminate-button" onClick={eliminatePlayer}>
				Eliminate
			</button>
		</div>
	);
}
