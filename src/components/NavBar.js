import React from 'react';

function NavBar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
