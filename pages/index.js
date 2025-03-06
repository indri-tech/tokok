import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";

// Gunakan display: "swap" untuk meningkatkan performa
const inter = Inter({ subsets: ["latin"], display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
      <div
          className={`${inter.className} ${robotoMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Pastikan file next.svg ada di /public */}
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
                pages/index.js
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
            >
              {/* Pastikan file vercel.svg ada di /public */}
              <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logo"
                  width={20}
                  height={20}
              />
              Deploy now
            </a>
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
          >
            {/* Pastikan file file.svg ada di /public */}
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js"
              target="_blank"
              rel="noopener noreferrer"
          >
            {/* Pastikan file window.svg ada di /public */}
            <Image src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            {/* Pastikan file globe.svg ada di /public */}
            <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
  );
}
