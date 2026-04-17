import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">404 - Not Found</h2>
      <p className="mt-4 text-gray-600">
        Could not find the requested resource.
      </p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Return Home
      </Link>
    </div>
  );
}
