/* eslint-disable max-len */
import React from 'react';
import style from './home.module.scss';
import hero from '../../assets/images/m-pack/m-pack2_o7d8mi_c_scale,w_1920.webp';
import hero1 from '../../assets/images/m-pack/m-pack2_o7d8mi_c_scale,w_310.webp';
import hero2 from '../../assets/images/m-pack/m-pack2_o7d8mi_c_scale,w_1177.webp';
import weather from '../../assets/images/weather/weather_hrfd74_c_scale,w_730.webp';
import weather1 from '../../assets/images/weather/weather_hrfd74_c_scale,w_310.webp';
import blog from '../../assets/images/blog/blog_uui62c_c_scale,w_730.webp';
import blog1 from '../../assets/images/blog/blog_uui62c_c_scale,w_310.webp';
import ecommerce from '../../assets/images/ecommerce/ecommerce_clo8px_c_scale,w_730.webp';
import ecommerce1 from '../../assets/images/ecommerce/ecommerce_clo8px_c_scale,w_310.webp';
import ecommerce2 from '../../assets/images/ecommerce/ecommerce_clo8px_c_scale,w_684.webp';
import ProductCard from '../../components/ProductCard';

export default function MainHome() {
	return (
		<main>
			<div className={style.homeContainer}>
				<div className={style.homeContainer__bg}>
					<img
						sizes="(max-width: 1920px) 100vw, 1920px"
						srcSet={`${hero1} 310w,${hero2} 1177w,${hero}`}
						src={hero}
						alt="hero background"
					/>
				</div>
				<div className={style.contentContainer}>
					<h2>One Home for three...</h2>
					<p>
            At M-Pack, we give you the best when it comes to Ecommerce, Weather
            forecast, News and so much more.{' '}
					</p>
					<div className={style.contentContainer__link}>
						<a href="/#pack">Get Started</a>
					</div>
				</div>
			</div>
			<section id="pack" className="main-container">
				<div className={style.packGrid}>
					<ProductCard
						srcset={`
            ${ecommerce1} 310w,
            ${ecommerce2} 684w,
            ${ecommerce} 730w
            `}
						src={ecommerce}
						to="/ecommerce/shop"
						title="Ecommerce"
					/>
					<ProductCard
						srcset={`${weather1} 310w,${weather} 730w`}
						src={weather}
						to="/weather"
						title="Weather"
					/>
					<ProductCard
						srcset={`${blog1} 310w,${blog} 730w,`}
						src={blog}
						to="/blog/posts"
						title="Blog"
					/>
					<ProductCard
						// Srcset={`${blog1} 310w,${blog} 730w,`}
						// src="https://via.placeholder.com/400x210"
						to="/"
						title="Coming Soon!"
					/>
				</div>
			</section>
		</main>
	);
}
