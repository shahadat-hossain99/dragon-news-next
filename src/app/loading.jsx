// app/loading.jsx

const Loading = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
      {/* Brand */}
      <div className="text-center">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "serif" }}>
          The Dragon News
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Journalism Without Fear or Favour
        </p>
      </div>

      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-red-600"></span>

      {/* Loading text */}
      <p className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
        Loading latest news...
      </p>

      {/* Skeleton Cards */}
      <div className="w-full max-w-2xl px-4 flex flex-col gap-4 mt-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex gap-4 items-center border border-gray-100 rounded-lg p-4 shadow-sm"
          >
            <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="skeleton h-3 w-3/4 rounded"></div>
              <div className="skeleton h-3 w-1/2 rounded"></div>
            </div>
            <div className="skeleton w-16 h-16 rounded shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
