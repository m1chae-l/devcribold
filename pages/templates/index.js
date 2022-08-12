import Link from "next/link";
import Head from "next/head";
import styles from "../exercises/exercisesgen.module.css"
import PageContentFooter from "../../components/PageContentFooter";
import { useAuthContext } from "../../hooks/useAuthContext";
import Footer from "../../components/Footer";



const Templates = () => {



    const { user } = useAuthContext()



    return (
        <>
            <Head>
                <title>Responsive Templates | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.genexcbackground}>

                {user ? (
                    <div className={styles.exhomepagecontent}>
                        <h1>Responsive Templates</h1>


                        <h2>More Templates coming soon</h2>


                        <div className={styles.extraborder}>

                            <div className="embedDiv">
                                <iframe height="500" style={{ "width": "90%" }}
                                    scrolling="no" title="Responsive Template 1" src="https://codepen.io/_michaeli/embed/KKomPpE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                    See the Pen <Link href="https://codepen.io/_michaeli/pen/KKomPpE"><a>
                                        Responsive Template 1</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                    on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                                </iframe>
                            </div>
                        </div>

                        <div className={styles.extraborder}>

                            <div className="embedDiv">
                                <iframe height="500" style={{ "width": "90%" }}
                                    scrolling="no" title="Responsive Template 2" src="https://codepen.io/_michaeli/embed/yLKbBXB?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                    See the Pen <Link href="https://codepen.io/_michaeli/pen/yLKbBXB"><a>
                                        Responsive Template 2</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                    on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                                </iframe>
                            </div>
                        </div>


                        <PageContentFooter />
                    </div>) :
                    <div className="tempviewlogin">
                        <div className={styles.exhomepagecontent}>
                            <div className="temploginmessage">
                                <h2>
                                    <Link href="/login/"><a>Log In</a></Link>
                                    to See Templates</h2 >
                            </div>

                        </div>
                        <Footer />
                    </div>

                }


            </div>
        </>
    );
}

export default Templates;
