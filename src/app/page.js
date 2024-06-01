

// pages/index.js
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354l1.76 3.555 3.926.574-2.838 2.77.669 3.901L12 13.801l-3.517 1.853.669-3.901-2.838-2.77 3.926-.574L12 4.354z"
            />
          </svg>
        </div>
        <h1 className="text-7xl font-bold mb-4">MagicDocs</h1>
        <p className="mt-4 text-lg font-semibold text-gray-600">
          Build boldly, browse easily: Your quick-reference guide to seamless,<br></br>
          versatile software development strategies and solutions.
        </p>
        <div className="mt-4 space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-100">
            Backend
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-100">
            Frontend
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-100">
            Fullstack
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-100">
            Database
          </button>
        </div>
        <div className="mt-6 space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            Write a documentation and get paid
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-100">
            Request a documentation for free
          </button>
        </div>
      </div>
    </div>
  );
}
