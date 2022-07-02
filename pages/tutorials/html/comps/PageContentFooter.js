import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../comps/pagecf.module.css"
import { useState } from "react";


const PageContentFooter = () => {

    const [reportErrorTab, setreportErrorTab] = useState(false)
    const [reportText, setreportText] = useState(false)

    const OpenreportErrorTab = () => {
        setreportErrorTab(!reportErrorTab)
        setreportText(!reportText)
    }


    return (
        <>
            <div className="pagecontentBottomborder">
                &#10240;
            </div>
            <div className={styles.PageContentFooter}>

                <div className={styles.toprightfootstuff}>
                    <div className={styles.backtotop}>
                        <Link href="#backtotop">
                            <a>
                                <p>Back To Top</p>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.report}>
                        <p onClick={OpenreportErrorTab}>{reportText ? (
                            <span> Close Report Tab</span>
                        ) : <span>Report Error</span>} </p>
                        {reportErrorTab ? (
                            <div className={styles.reportmessage}>
                                <h2>Report Error</h2>
                                If you want to report an error, or if you want to make a suggestion, do not hesitate to send us an e-mail;
                                <br />
                                test@example.com
                            </div>
                        ) : null}
                    </div>
                    <p className={styles.forum_about}>
                        <Link href="/infographics/termsofservice">
                            <a>TERMS OF SERVICE  </a>
                        </Link>
                        |
                        <Link href="/infographics/about">
                            <a>  ABOUT</a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="pagecontentBottomborder">
                &#10240;
            </div>
            <div className={styles.footerinfo}>
                <p>DevCrib is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using DevCrib, you agree to have read and accepted our terms of use, cookie and privacy policy.
                    <br />
                    <br />
                    Copyright 2022 by Michael Okwuosah. All Rights Reserved.
                </p>
                <div className={styles.footerlogo}>
                    <Image src="/devcrib2.png" width={160} height={101} alt="DevCrib" />
                </div>
            </div>
        </>
    );
}

export default PageContentFooter;