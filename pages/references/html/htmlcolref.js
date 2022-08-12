import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import { useState, useEffect } from "react";
import ColorTable from "./comps/ColTable";
import PageContentFooter from "../../../components/PageContentFooter";

import { useAuthContext } from "../../../hooks/useAuthContext"


const HtmlColRef = () => {


    // const [search, setsearch] = useState("")
    // const [noRes, setnoRes] = useState('Tag Not Found')


    // useEffect(() => {
    //     setsearch("")
    // }, [htmltagref])


        const { user } = useAuthContext()

    return (
        <>

            <Head>
                <title>HTML Color Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

                <div className={styles.pagecontent}>
                    <h1>HTML Color Reference</h1>
                    <h2>Color Names Supported by All Browsers</h2>
                    <p>All modern browsers support the following 140 color names. It is highly recommended using hexadecimal color codes or the RGB values. Also note that in addition to HTML, these names are also supported in CSS and SVG.</p>

                    <div>


                        <table className={styles.coltable}>
                            <tbody>
                                <ColorTable />
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

export default HtmlColRef;