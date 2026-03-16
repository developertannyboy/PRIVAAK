import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-10">

      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        AI Medicine Reminder
      </h1>

      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Never miss your medicine again. Our AI healthcare agent reminds patients
        about medications and follow-up appointments automatically.
      </p>

      <Link href="/dashboard">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</Link>

    </main>
  );
}