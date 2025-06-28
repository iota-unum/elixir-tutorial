import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();
  console.log("All Posts Data:", allPostsData); // Add this line for debugging
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-white text-center">Elixir Tutorials</h1>
      <section className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">Lessons</h2>
        <ul className="space-y-4">
          {allPostsData.map(({ id, title }) => (
            <li key={id} className="bg-gray-700 shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105">
              <Link href={`/lessons/${id}`} className="text-blue-400 hover:underline text-xl font-semibold">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
