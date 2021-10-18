import React, {useState} from 'react';
import style from './filterNav.module.scss';

export default function index() {
	const [active, setActive] = useState('tag');
	const tags = [
		{name: 'All', val: 'tag'},
		{name: 'Finance', val: 'tag1'},
		{name: 'Fitness', val: 'tag2'},
		{name: 'Travel', val: 'tag3'},
		{name: 'Tech', val: 'tag4'},
		{name: 'Food', val: 'tag5'},
		{name: 'Music', val: 'tag6'},
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
