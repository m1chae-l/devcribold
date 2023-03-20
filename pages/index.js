import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ComingSoonList from '../jsons/coming soon list 1.json'
import Footer from '../components/Footer'


export default function Home() {

  // HTML ANGLE BRACKET

  const BrO = <span className="tagcolor">&lt;</span>;
  const BrC = <span className="tagcolor">&gt;</span>;


  // CSS CURLY BRACKET

  const CBrO = <span className="curlybracket">&#123;</span>;
  const CBrC = <span className="curlybracket">&#125;</span>;

  // &#39;  ---  '

  //  &#34; --- "

  // &#123; Left Curly Bracket
  // &#125; right Curly Bracket


  // <	&lt;	&#60;	&#x3C;	less than
  // >	&gt;	&#62;	&#x3E;	greater than

  return (
    <>

      <Head>
        <title>Dev Crib | Your Front-End Developer Hub</title>
        <meta name="description" content="Dev Crib" />
      </Head>
      <div className="content">
        <div className={styles.learntocode}>
          <div className={styles.lltc}>
            <h1><span className={styles.lltclearn}>Learning</span> to <span className={styles.lltccode}>Code</span> has never been <span className={styles.lltceasier}>easier</span>.</h1>
            <div className={styles.lltcp}>
              <p>Dev Crib is a Front-end Web Developer Hub that&#39;s here to help you kick start your career as a Front-End Web Developer with ease.</p>
              <p>Focused on modern web standards and web app UX, Dev Crib would simply teach you how to build better websites. By the time you&#39;re done, people are gonna love using your stuff!</p>
            </div>
            {/* <h3>Kick start your Front-End Web Developer Career</h3> */}
            <Link href="/infographics/wheretobegin">
              <a> <h4>Here&apos;s Where To Begin</h4></a>
            </Link>
          </div>
          <div className={styles.rltc}>
            <div className={styles.innerrltc}>
              <div className={styles.innerrltcexample}>
                <p className="inlinehtml">
                  {BrO}!DOCTYPE <span className="attributecolor">html</span>{BrC} <br />
                  {BrO}html{BrC} <br />
                  <br />
                  {BrO}head{BrC} <br />
                  {BrO}title{BrC}<span>Code Tutorial</span>{BrO}/title{BrC} <br /> <br />
                  {BrO}style{BrC} <br />
                  <span className="inlinecss">
                    body {CBrO}  <br />
                    <span className="cselector">background-color:</span> <span className="cssvalue">lightblue</span>;  <br />
                    {CBrC}
                    <br />
                    <br />
                    #jsSample {CBrO}  <br />
                    <span className="cselector">font-size:</span> <span className="cssvalue">28px</span>;  <br />
                    <span className="cselector">font-family:</span> <span className="cssvalue">&#34;Source Sans Pro&#34;</span>;  <br />
                    {CBrC}
                  </span> <br />
                  {BrO}/style{BrC} <br />
                  <p className="inlinejs">
                    {BrO}script{BrC} <br />
                    <span className="jsvh">function</span> myFunction()<span className="tabbedjs">&#123;</span> <br />
                    <span className="tabbedjs"><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;jsSample&#34;</span>); <br /></span>
                    <span className="tabbedjs">x.style.fontSize = <span className="jsfunval">&#34;25px&#34;</span>; <br /></span>
                    <span className="tabbedjs"> x.style.color = <span className="jsfunval">&#34;red&#34;</span>; <br />
                    </span>
                    {CBrC}; <br />
                    <br />
                    {/* <span className="jsvh">const</span><span> d =</span> <span className="jsvh">new</span> <span>Date();</span> <br />
                    <span><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;datesample&#34;</span>).innerHTML = d;</span> <br /> */}
                    {BrO}/script{BrC}
                  </p>
                  {BrO}/head{BrC} <br />
                  <br />
                  {BrO}body{BrC}
                  <br />
                  <br />
                  {BrO}h1{BrC}<span>This is a heading</span>{BrO}/h1{BrC} <br />
                  {BrO}h2{BrC}<span>This is a Sub-heading</span>{BrO}/h2{BrC} <br />
                  {BrO}h3{BrC}<span>This code snippet contains HTML, CSS and JavaScript</span>{BrO}/h3{BrC} <br />

                  <br />
                  {BrO}p{BrC}<span>This is a paragraph.</span>{BrO}/p{BrC} <br />

                  {BrO}p <span className="inlinecss">id=&quot;jsSample&quot;</span>{BrC}<span>Click the button below to change the layout of this paragraph</span>{BrO}/p{BrC}
                  <p className="inlinejs">
                    {BrO}button <span className="jsvh">onclick</span>=&#34;myFunction()&#34;{BrC}<span>Click Me!</span>{BrO}/button{BrC}
                  </p>
                  {BrO}/body{BrC} <br />
                  {BrO}/html{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.beforelearnh}>
          <p> </p>
        </div>
        <div className="learnhtml">
          <div className="leftlearnhtml">
            <h1>Learn</h1>
            <h1>HTML</h1>
            <h3>The building blocks that make up the bodies of all Web Pages</h3>
            <Link href="/tutorials/html/">
              <a> <h4>Learn HTML</h4></a>
            </Link>
            <Link href="/references/html/htmltagref">
              <a> <h4>HTML References</h4></a>
            </Link>
          </div>
          <div className="rightlearnhtml">
            <div className="innerrlh">
              <h2>HTML Example: </h2>
              <div className="innerrlhexample">
                <p className="inlinehtml">
                  {BrO}!DOCTYPE <span className="attributecolor">html</span>{BrC} <br />
                  {BrO}html{BrC} <br />
                  {BrO}title{BrC}<span>HTML Tutorial</span>{BrO}/title{BrC} <br />
                  {BrO}body{BrC}
                  <br />
                  <br />
                  {BrO}h1{BrC}<span>This is a heading</span>{BrO}/h1{BrC} <br />
                  {BrO}h2{BrC}<span>This is a Sub-heading</span>{BrO}/h2{BrC} <br />
                  <br />
                  {BrO}p{BrC}<span>This is a paragraph.</span>{BrO}/p{BrC}
                  <br />
                  <br />
                  {BrO}/body{BrC} <br />
                  {BrO}/html{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="learncss">
          <div className="leftlearncss">
            <div className="innerllc">
              <h2>CSS Example:</h2>
              <div className="innerllcexample">
                <p className="inlinecss">
                  body {CBrO}  <br />
                  <span className="cselector">background-color:</span> <span className="cssvalue">lightblue</span>;  <br />
                  {CBrC}
                  <br />
                  <br />
                  h1 {CBrO}  <br />
                  <span className="cselector">color:</span> <span className="cssvalue">white</span>;  <br />
                  <span className="cselector">text-align:</span> <span className="cssvalue">center</span>;  <br />
                  {CBrC}
                  <br />
                  <br />
                  .sampleclass {CBrO} <br />
                  <span className="cselector">display:</span> <span className="cssvalue">flex</span>; <br />
                  <span className="cselector">flex-direction</span> <span className="cssvalue">row</span>; <br />
                  {CBrC}
                </p>
              </div>
            </div>
          </div>
          <div className="rightlearncss">
            <h1>Learn</h1>
            <h1>CSS</h1>
            <h3>The stlying language that beautifies all Web Pages</h3>
            <Link href="/tutorials/css/">
              <a> <h4>Learn CSS</h4></a>
            </Link>
            <Link href="/references/css/csspropref">
              <a> <h4>CSS References</h4></a>
            </Link>
          </div>
        </div>


        <div className="learnjavascript">
          <div className="leftlearnjs">
            <h1>Learn</h1>
            <h1>JavaScript</h1>
            <h3>The scripting language used for programming Web Pages</h3>
            <Link href="/tutorials/javascript/">
              <a> <h4>Learn JavaScript</h4></a>
            </Link>
            <Link href="/references/javascript/jsmethref">
              <a> <h4>JavaScript References</h4></a>
            </Link>
          </div>
          <div className="rightlearnjs">
            <div className="innerrlj">
              <h2>JavaScript Example: </h2>
              <div className="innerrljexample">
                <p className="inlinejs">
                  {BrO}button <span className="jsvh">onclick</span>=&#34;myFunction()&#34;{BrC}<span>Click Me!</span>{BrO}/button{BrC}
                  <br />
                  <br />
                  {BrO}script{BrC} <br />
                  <span className="jsvh">function</span> myFunction() &#123; <br />
                  <span className="tabbedjs"><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;demo&#34;</span>); <br /></span>
                  <span className="tabbedjs">x.style.fontSize = <span className="jsfunval">&#34;25px&#34;</span>; <br /></span>
                  <span className="tabbedjs"> x.style.color = <span className="jsfunval">&#34;red&#34;</span>; <br />
                  </span>
                  {CBrC} <br />
                  <br />
                  <span className="jsvh">const</span><span> d =</span> <span className="jsvh">new</span> <span>Date();</span> <br />
                  <span><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;datesample&#34;</span>).innerHTML = d;</span> <br />
                  {BrO}/script{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* <div className={styles.comingsoon}>
          <div className={styles.cmshead}>
            <h1>Coming Soon...</h1>
          </div>
          <div className={styles.preview_cont}>
            {ComingSoonList.map(cmsl => (
              <div className={styles.preview} key={cmsl.id}>
                <h1>{cmsl['Language Name']}</h1>
                <p>{cmsl['Short Note']}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className={styles.codeedit}>
          <h1>Code Editor</h1>
          <h3>With the embedded <Link href="https://codepen.io/"><a target="_blank">Codepen</a></Link> online code editor, you can edit code and view the result in your browser.</h3>
          <div className="embedDiv">
            <iframe height="550" style={{ "width": "90%" }}
              scrolling="no" title="Code Sample" src="https://codepen.io/_michaeli/embed/rNdMLao?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
              See the Pen <Link href="https://codepen.io/_michaeli/pen/rNdMLao"><a>
                Code Sample</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
              on <Link href="https://codepen.io"><a>CodePen.</a></Link>
            </iframe>
          </div>
        </div>

        <div className={styles.templateresponse}>
          <h1>Web Templates</h1>
          <h3>Browse the free responsive HTML <Link href="/templates/"><a target="_blank">Templates</a></Link> section.</h3>
          <div className="embedDiv">
            <iframe height="500" style={{ "width": "90%" }}
              scrolling="no" title="Responsive Template 1" src="https://codepen.io/_michaeli/embed/KKomPpE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
              See the Pen <Link href="https://codepen.io/_michaeli/pen/KKomPpE"><a>
                Responsive Template 1</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
              on <Link href="https://codepen.io"><a>CodePen.</a></Link>
            </iframe>
          </div>
        </div>

      </div>


      <Footer />
    </>
  )
}
