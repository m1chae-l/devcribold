import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import MediaMet from "../../../jsons/htmlref/MediaMethods.json"
import MediaProp from "../../../jsons/htmlref/MediaProps.json"
import MediaEv from "../../../jsons/htmlref/MediaEvents.json"
import PageContentFooter from "../../../components/PageContentFooter";

import { useAuthContext } from "../../../hooks/useAuthContext"



const HtmlMediaRef = () => {
        const { user } = useAuthContext()

    return (
        <>
            <Head>
                <title>HTML Media (Audio/Video) Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

                <div className={styles.pagecontent}>
                    <h1>HTML Media (Audio and Video) DOM Reference</h1>
                    <h2>HTML Media (Audio and Video) Methods, Properties and Events.</h2>
                    <div className={styles.extraborder}>
                        <p>The HTML5 DOM has methods, properties, and events for the &#10216;audio&#10217; and &#10216;video&#10217; elements.</p>
                    </div>
                    <h3>HTML Media (Audio and Video) Methods</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                            {MediaMet.map(MediaM => (
                                <tr key={MediaM.id}>
                                    <td>{MediaM['Method']}</td>
                                    <td>{MediaM['Description']}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>HTML Media (Audio and Video) Properties</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                            <tr>
                                <th>Property</th>
                                <th>Description</th>
                            </tr>
                            {MediaProp.map(MediaP => (
                                <tr key={MediaP.id}>
                                    <td>{MediaP['Property']}</td>
                                    <td>{MediaP['Description']}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>HTML Media (Audio and Video) Events</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                            <tr>
                                <th>Event</th>
                                <th>Description</th>
                            </tr>
                            {MediaEv.map(MediaE => (
                                <tr key={MediaE.id}>
                                    <td>{MediaE['Event']}</td>
                                    <td>{MediaE['Description']}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <PageContentFooter />
                    </div>) : <div className="loginmessage">
                    <h2>
                        <Link href="/login/"><a>Log In</a></Link>
                        to See References</h2 >
                </div>
                }
            </div>
        </>
    );
}

export default HtmlMediaRef;