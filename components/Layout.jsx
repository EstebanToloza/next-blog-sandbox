import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "next blog - sandbox"


export default function Layout({children, title, description, home}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <Image
                        priority
                        src="/img/image.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/img/image.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                </>
                )}
                    <nav>
                    <Link href="/">
                    <a>Inicio | </a>
                    </Link>
                    <Link href="/blog">
                    <a>Blog | </a>
                    </Link>
                    <Link href="/contact">
                    <a>Contacto</a>
                    </Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
            <footer>
                footer
            </footer>
        </>
    )
}

Layout.defaultProps = {
    title: "Titulo default",
    description: "Description"
}
