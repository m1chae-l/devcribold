import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {

  // HTML ANGLE BRACKET
  const BracketOpen = '<';
  const BracketClose = '>';

  const BrO = <span className="tagcolor">{BracketOpen}</span>;
  const BrC = <span className="tagcolor">{BracketClose}</span>;


  // CSS CURLY BRACKET

  const CurlyBracketOpen = '{';
  const CurlyBracketClose = '}';

  const CBrO = <span className="curlybracket">{CurlyBracketOpen}</span>;
  const CBrC = <span className="curlybracket">{CurlyBracketClose}</span>;

  // SINCE I CANT USE " " Directly for some reason

  const Quot = '"';

  return (
    <>

      <Head>
        <title>Dev Crib | Your Front-End Developer Hub</title>
        <meta name="description" content="Dev Crib" />
      </Head>
      <div className="content">
        <div className="learntocode">
          <div className="innerlearntocode">
            <h1>Learn to Code</h1>
            <h3>Kick start your Front-End Web Developer Career</h3>
            <Link href="#">
              <a> <h4>Having trouble Deciding Where to Begin?</h4></a>
            </Link>
          </div>
        </div>
        <div className="gradient1">
          <p> </p>
        </div>
        <div className="learnhtml">
          <div className="leftlearnhtml">
            <h1>Learn</h1>
            <h1>HTML</h1>
            <h3>The building blocks that make up the bodies of all Web Pages</h3>
            <h4>Learn HTML</h4>
            <h4>HTML References</h4>
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
        <div className="gradient2">
          <p> </p>
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
            <h4>Learn CSS</h4>
            <h4>CSS References</h4>
          </div>
        </div>
        <div className="gradient3">
          <p> </p>
        </div>
        <div className="learnjavascript">
          <div className="leftlearnjs">
            <h1>Learn</h1>
            <h1>JavaScript</h1>
            <h3>The scripting language used for programming Web Pages</h3>
            <h4>Learn JavaScript</h4>
            <h4>JavaScript References</h4>
          </div>
          <div className="rightlearnjs">
            <div className="innerrlj">
              <h2>JavaScript Example: </h2>
              <div className="innerrljexample">
                <p className="inlinejs">
                  {BrO}button <span className="jsvh">onclick</span>={Quot}myFunction(){Quot}{BrC}<span>Click Me!</span>{BrO}/button{BrC}
                  <br />
                  <br />
                  {BrO}script{BrC} <br />
                  <span className="jsvh">function</span> myFunction() {CBrO} <br />
                  <span className="tabbedjs"><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">{Quot}demo{Quot}</span>); <br /></span>
                  <span className="tabbedjs">x.style.fontSize = <span className="jsfunval">{Quot}25px{Quot}</span>; <br /></span>
                  <span className="tabbedjs"> x.style.color = <span className="jsfunval">{Quot}red{Quot}</span>; <br />
                  </span>
                  {CBrC} <br />
                  <br />
                  <span className="jsvh">const</span><span> d =</span> <span className="jsvh">new</span> <span>Date();</span> <br />
                  <span><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">{Quot}datesample{Quot}</span>).innerHTML = d;</span> <br />
                  {BrO}/script{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gradient4">
          <p> </p>
        </div>
      </div>























    </>
  )
}
