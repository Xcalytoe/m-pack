import React from 'react';
import {Link} from 'react-router-dom';
import style from './postCard.module.scss';
export default function index() {
	const wordLimit = (limit, text) => (text.length > limit)
		? `${text.substring(0, limit)}...` : `${text}`;
	const word = `Worst-hit districts of Kottayam and Idukki
suffer deadly mudslides as torrential rains swept
through villages. Worst-hit districts of Kottayam
 and Idukki suffer deadly mudslides as torrential
 rains swept through villages.`;
	const readingTime = word => {
		const wordLength = word.length;
		const timeCalc = Math.floor(wordLength / 200);
		return (
			timeCalc > 1
				? `${timeCalc}mins read`
				: timeCalc === 1
					? `${timeCalc}min read`
					: `${Math.ceil(wordLength / 200)}secs read`
		);
	};

	return (
		<Link to="/" className={style.postCard}>
			<div className={style.postCard__image}>
				<img src="https://via.placeholder.com/400x210" alt="Blog post image"/>
			</div>
			<div className={style.postCard__content}>
				<div className={style.postCard__subHead}>
					<span>Finance</span>
					<p>Jane Doe</p>
				</div>
				<h4>Bill Clinton released
                    from hospital after urological infection</h4>
				<p className={style.postCard__summary}>
					{wordLimit(200, word)}
				</p>
				<div className={style.postCard__footer}>
					<p>26th Apr. {readingTime(word)}</p>
					<button>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 2L18 6L7 17H3V13L14 2Z"
								stroke="#AA7512" strokeWidth="2"
								strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M3 22H21"
								stroke="#AA7512"
								strokeWidth="2" strokeLinecap="round"
								strokeLinejoin="round"/>
						</svg>

					</button>
				</div>
			</div>
		</Link>
	);
}
