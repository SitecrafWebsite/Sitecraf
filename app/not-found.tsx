import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] text-[#e8e8f0]">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-[#8888a0] mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-[#b5ff3e] text-[#000000] px-6 py-3 rounded-full font-semibold">
        Return Home
      </Link>
    </div>
  );
}
