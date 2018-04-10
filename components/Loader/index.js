// Merci La Rouquine
import { brandColors } from "../../constantes/colors";

const Loader = () => (
	<div className="loader">
		<div className="circle loader-orange" />
		<div className="line">
			<div className="circle loader-green" />
			<div className="circle loader-purple" />
		</div>
		<div className="circle loader-pink" />
		<style jsx>{`
			.loader {
				animation: turn 1s ease infinite normal;
				border-radius: 100%;
				height: 5rem;
				margin: auto;
				position: absolute;
				top: calc(50% - 2.5rem);
				left: calc(50% - 2.5rem);
				width: 5rem;
			}

			@keyframes turn {
				0% {
					transform: rotate(-360deg);
				}
			}

			/* Valeurs communes aux quatres cercles/loader */

			.circle {
				border-radius: 100%;
				display: block;
				height: 1.25rem;
				position: relative;
				width: 1.25rem;
			}

			/* Loader orange + keyframes attribué */

			.loader-orange {
				animation: top 1s ease-in-out infinite normal;
				background-color: ${brandColors.orange};
				margin: auto;
			}

			@keyframes top {
				0% {
					transform: translateY(0);
				}
				50% {
					transform: translateY(13px);
				}
				100% {
					transform: translateY(0);
				}
			}

			/* div pour l'alignement du loader vert et violet + leurs keyframes attribués à chacun */

			.line {
				display: flex;
				justify-content: space-between;
				margin-top: 12.5px;
				position: relative;
			}

			.loader-green {
				animation: left 1s ease-in-out infinite normal;
				background-color: ${brandColors.green};
			}

			@keyframes left {
				0% {
					transform: translateY(0);
				}
				50% {
					transform: translateX(13px);
				}
				100% {
					transform: translateY(0);
				}
			}

			.loader-purple {
				animation: right 1s ease-in-out infinite normal;
				background-color: ${brandColors.purple};
			}

			@keyframes right {
				0% {
					transform: translateY(0);
				}
				50% {
					transform: translateX(-13px);
				}
				100% {
					transform: translateY(0);
				}
			}

			/* loader rose + keyframes attribué */

			.loader-pink {
				animation: bottom 1s ease-in-out infinite normal;
				background-color: ${brandColors.pink};
				margin: auto;
				margin-top: 10px;
			}

			@keyframes bottom {
				0% {
					transform: translateY(0);
				}
				50% {
					transform: translateY(-13px);
				}
				100% {
					transform: translateY(0);
				}
			}
			`}
		</style>
	</div>
);

export default Loader;
