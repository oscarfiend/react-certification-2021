import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found-background" />
      <img className="not-found-image" src="error-logo-1.svg" alt="page not found" />
      <strong className="not-found-description">
        The page you were looking for doesn’t exist
      </strong>
      <Link to="/">Go Back</Link>
    </section>
  );
}

export default NotFoundPage;
