import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-editorial font-bold mb-4">404</h1>
        <h2 className="text-2xl font-inter font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg font-inter text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white font-inter font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;