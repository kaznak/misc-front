import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container m-auto p-4">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="grid justify-center gap-2">
      <h1 className="text-center text-2xl">
        Welcome to{' '}
        <a href="https://nextjs.org" className="text-blue-500">
          Next.js!
        </a>
      </h1>
      <p className="text-center">
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <div className="grid justify-center">
        <button
          className="border rounded p-1"
          onClick={() => {
            window.alert('With typescript and Jest')
          }}
        >
          Test Button
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://nextjs.org/docs"
          className="border rounded p-2 hover:text-blue-500 hover:border-blue-500"
        >
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="border rounded p-2 hover:text-blue-500 hover:border-blue-500"
        >
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="border rounded p-2 hover:text-blue-500 hover:border-blue-500"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="border rounded p-2 hover:text-blue-500 hover:border-blue-500"
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer className="flex justify-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="inline-block h-4" />
      </a>
    </footer>
  </div>
)

export default Home
