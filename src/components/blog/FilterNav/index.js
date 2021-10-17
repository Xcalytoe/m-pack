import React, {useState} from 'react';
import style from './filterNav.module.scss';

export default function index() {
	const [active, setActive] = useState('tag');
	const tags = [
		{name: 'All categories', val: 'tag'},
		{name: 'Cat one', val: 'tag1'},
		{name: 'Cat two', val: 'tag2'},
		{name: 'Cat three', val: 'tag3'},
		{name: 'Cat four', val: 'tag4'},
	];
	const options = tags.map(tag => (
		<button
			type="button"
			key={tag.val}
			className={`${active === tag.val ? style.subNav__active : ''}`}
			onClick={() => setActive(tag.val)}
		>
			{tag.name}
		</button>
	));
	return (
		<div className={style.subNav}>
			<div className={`${style.subNav__btn} main-container`}>
				{options}
			</div>
			<div className={style.subNav__underline} />
		</div>
	);
}
