import Image from "next/image";

export default function Home() {
  return (
      <main className="main-wrapper">
        <Image
          className="logo-wrapper"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

      </main>
  );
}
