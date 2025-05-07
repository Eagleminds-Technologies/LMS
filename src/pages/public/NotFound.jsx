import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-6">
          <Link to="/">
            <Button>
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;