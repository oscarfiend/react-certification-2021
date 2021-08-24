import React from 'react';
import { Link } from 'react-router-dom';
import {
  NotFoundBackground,
  NotFoundDescription,
  NotFoundImage,
  NotFoundSection,
} from './NotFound.styled';

function NotFoundPage() {
  return (
    <NotFoundSection>
      <NotFoundBackground />
      <NotFoundImage src="error-logo-1.svg" alt="page not found" />
      <NotFoundDescription>
        The page you were looking for doesn’t exist
      </NotFoundDescription>
      <Link to="/">Go Back</Link>
    </NotFoundSection>
  );
}

export default NotFoundPage;
