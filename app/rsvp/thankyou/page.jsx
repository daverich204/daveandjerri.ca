import Image from "next/image";

const ThankYouPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative mb-12 text-center">
        <h1 className={"text-2xl"}> Thank you! </h1>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/DaveAndJerri.svg"
            alt="Dave and Jerri logo"
            width={300}
            height={180}
            priority
          />
        </div>

        <div className={"relative"}>
          <a
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Home{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Get more information
            </p>
          </a>
        </div>

      </div>
    </main>
  );
}

export default ThankYouPage;