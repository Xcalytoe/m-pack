import React from 'react'
import { Link } from "react-router-dom";
import style from "./nav.module.scss"

export default function BlogNav() {
    return (
        <header className={style.header}>
          <div className={`flex ${style.header__flex} main-container`}>
              <Link to="/blog/posts" className={style.logo}>
                  <div className="flex">
                      <span className={style.m_style}>M</span>
                      <span className={style.pack}>-blog</span>
                  </div>

              </Link>
              <nav className={`${style.colGap} flex`}>
                <Link to="/">Home</Link>
                <Link to="/blog/posts">Posts</Link>
              </nav>
              <div className={`${style.colGap} flex`}>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
              </div>
          </div>
      </header>
    )
}
