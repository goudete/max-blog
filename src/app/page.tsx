'use client';
import Link from 'next/link';


export default function Home() {

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto min-h-screen">

      <header className="bg-zinc-400 w-full p-4 mt-16 mb-16 drop-shadow-2xl">
        <div className="text-lg font-semibold">Max&apos;s blog</div>
      </header>
      <div className="w-full mb-16 flex justify-around items-center">
        <div className="w-full mb-16 max-w-sm">
          <div className="text-lg font-semibold">
            About Me:
          </div>
          <p className="pb-4">
            I currently work at a startup in Brazil. I write about things that I find entertaining.
          </p>
          <div className="underline">
            <Link href="https://twitter.com/maxwerrod">Twitter</Link>
          </div>
          <div className="underline">
            <Link href="https://www.linkedin.com/in/max-werner-rodriguez-11ab50167/">LinkedIn</Link>
          </div>
          <div className="underline pb-8">
            <Link href="/books">Books I enjoy</Link>
          </div>

          <div className="text-lg font-semibold">
            Archive
          </div>
          <div className="underline">
            <Link href="/posts/standing-in-the-shoulders-of-giants">Standing in the shoulders of giants</Link>
          </div>
          <div className="underline">
            <Link href="/posts/the-struggle">The Struggle</Link>
          </div>
        </div>
        <div className="">
          <img src="/path/to/your/image1.jpg" alt="Description of Image 1" className="w-32 h-32 object-cover" />
        </div>
        <div className="">
          <img src="/path/to/your/image1.jpg" alt="Description of Image 1" className="w-32 h-32 object-cover" />
        </div>
      </div>
    </div>
  );
}


