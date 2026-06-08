import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            AI Confidence
          </Link>
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Events
            </Link>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
