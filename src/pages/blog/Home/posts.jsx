import React from 'react';
import FilterNav from '../../../components/blog/FilterNav';
import PostCard from '../../../components/blog/PostCard';

export default function Blog() {
	return (
		<div className="main-containe">
			<FilterNav/>
			<section className="section-container">
				<PostCard/>
				<PostCard/>
				<PostCard/>
			</section>
		</div>
	);
}
