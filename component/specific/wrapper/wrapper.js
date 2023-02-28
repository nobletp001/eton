import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../../../src/styles/Home.module.css';
import { Header } from 'component/specific/header';
import { Footer } from 'component/specific/footer';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

export default function Wrapper({ children }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                {router.pathname !== '/' && <Header />}
                <div>{children}</div>
                {router.pathname !== '/' && <Footer />}
            </main>
        </>
    );
}
