import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re In!</h1>
        <p className="text-gray-400 mb-8">
          We received your setup request. You&apos;ll hear from us within 4
          hours with next steps and payment details.
        </p>
        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
