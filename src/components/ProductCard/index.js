import React from 'react';
import {Link} from 'react-router-dom';
import style from './productCard.module.css';

export default function index({srcset, src, to, title}) {
	return (
		<Link to={to} className={style.cardLink}>
			<div className={style.cardContent}>
				<div className={style.cardContent__bg}>
					<img
						sizes="(max-width: 730px) 100vw, 730px"
						srcSet={srcset}
						src={src}
						alt={title}
					/>
				</div>
				<div className={style.contentTitle}>
					<h2>{title}</h2>
				</div>
			</div>
		</Link>
	);
}
