import Head from 'next/head';
import Link from 'next/link';

const name = 'Your Name'
export const siteTitle = 'CONSTRUREMATES La tienda del constructor'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        
      </header>
      <main>{children}</main>
      <footer>

      </footer>
    </div>
  )
}