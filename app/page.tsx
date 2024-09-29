import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const LinkedInIcon = () => (
  <a
    href="https://www.linkedin.com/in/xycjustin/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
  >
    <FaLinkedin size={24} />
    LinkedIn
  </a>
);

const EmailIcon = () => (
  <a
    href="mailto:xycjustin@hotmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600"
  >
    <FaEnvelope size={24} />
    Email
  </a>
);

const PhoneIcon = () => (
  <a
    href="tel:7782397162"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white-600"
  >
    <FaPhone size={19} />
    My Number
  </a>
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Enterpreneur, husband, leader.</li>

          {/* <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li> */}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {
          <footer className="row-start-5 flex gap-10 flex-wrap items-center justify-center">
            {/* Render the Icon Components */}
            <LinkedInIcon />

            <EmailIcon />
            <PhoneIcon />
          </footer>

          /* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/xycjustin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Linkedin
        </a> */
        }
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:xycjustin@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Email
        </a> */}
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="tel:7782397162"
          rel="noopener noreferrer"
        >
          778-239-7162
        </a> */}
      </footer>
    </div>
  );
}
