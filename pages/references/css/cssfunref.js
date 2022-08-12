import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
// default imports
import cssfunref from "../../../jsons/cssref/CssFunctions.json"
import { useState, useEffect } from "react";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext"


const CssFunRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState("")


    useEffect(() => {
        setsearch("")
    }, [])

    const { user } = useAuthContext()

    return (
        <>

            <Head>
                <title>CSS Function Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />

                <div className={styles.pagecontent}>
                    <h1>CSS Function Reference</h1>
                    <h2>CSS Functions</h2>
                    <p>CSS functions are used as a value for various CSS properties.</p>
                    {/* Search Bar */}
                    <form className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search a Function.."
                            onChange={(event) => setsearch(event.target.value)}

                        />
                    </form>
                    <div>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Function</th>
                                    <th>Description</th>
                                </tr>
                                {cssfunref.filter((cssfun) => {
                                    if (search === "") {
                                        return cssfun;
                                    } else if (
                                        cssfun?.Function.toLowerCase().includes(search.toLowerCase())
                                    ) {
                                        return cssfun;
                                    } else if (
                                        cssfun?.Function.toLowerCase().includes(search.toLowerCase())
                                    ) return setnoRes("No Results")
                                }).map(cssfun => (
                                    <tr key={cssfun.id}>
                                        <td>{cssfun['Function']}</td>
                                        <td>{cssfun['Description']}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>


                    <PageContentFooter />
                    </div>
            </div>

        </>
    );
}

export default CssFunRef;