import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>File Hosting</title>
        <meta name="description" content="File Hosting site created for personal use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={{ textAlign: 'center', margin: '10px' }}>
        <Link href='/images'>
          <a>Images</a>
        </Link>
      </section>
    </div>
  )
}
