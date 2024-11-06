import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 btn bg-purple-600 text-white rounded px-4 py-2">
          Go Home
        </Link>
      </div>
    );
};

export default Error;