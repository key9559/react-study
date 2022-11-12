import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <a href='index.html' className='active'>홈</a>
        </li>
        <li>
          <a href='index.html'>랭킹</a>
        </li>
        <li>
          <a href='index.html'>상영/예정작</a>
        </li>
        <li>
          <a href='index.html'>콘텐츠</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;