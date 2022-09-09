import type { Component } from 'solid-js';
import { FaSolidCircleInfo, FaSolidGears, FaSolidHouse } from 'solid-icons/fa';
import { Link } from '@solidjs/router';

const Navbar: Component = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" href="/">
          <span class="icon">
            <FaSolidHouse />
          </span>
          <span>Home</span>
        </Link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" href="/settings">
            <span class="icon">
              <FaSolidGears />
            </span>
            <span>Config</span>
          </Link>
          <Link class="navbar-item" href="/about">
            <span class="icon">
              <FaSolidCircleInfo />
            </span>
            <span>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
