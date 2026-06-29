export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold text-green-700">
          Pahadi Pickle
        </h2>

        <p className="text-gray-600 mt-2">
          Loading...
        </p>
      </div>
    </div>
  );
}