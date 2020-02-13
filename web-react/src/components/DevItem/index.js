import React from 'react';

import './style.css';

function DevItem({ dev }) {

  return (
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
          <span></span>
        </div>
      </header>

      <p>{dev.bio}</p>

      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
}

export default DevItem;