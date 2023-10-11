import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href="/routeA/routeA1">To route A</Link>
        <Link href="/hgkjhghjgj">To not-found</Link>
    </main>
  )
}
