import './Source.css';
import Flipper from '../Flipper/Flipper';

const LEFT_CURLY = `{`;
const RIGHT_CURLY = `}`;

const Source = ({renderRef}) => {
  return (
    <div className="terminal">
      <div className="code">
        {}// <span className="keywordGrey">I love studying math and computer science</span><br/>
        <br/>
        {LEFT_CURLY} <br/>

        {}  "<span className="keywordGrey">Math</span>": {LEFT_CURLY}<br/>
        {}    "<span className="keywordGrey">Independent University of Moscow (<a href="https://ium.mccme.ru/">НМУ</a>)</span>": [<br/>
        {}    // Proof-based math courses from professors <Flipper normal="of HSE an" hovered="of ВШЭ an"/><Flipper normal="d MSU Math" hovered="d МГУ Math"/> departments<br/>
        {}      {renderRef("Linear Algebra and Geometry", 0)}, <br/>
        {}      {renderRef("Algebra 1-2", 0)}, <br/>
        {}      {renderRef("Real Analysis 1-2", 0)}, <br/>
        {}      {renderRef("Analysis on Manifolds", 0)}, <br/>
        {}      {renderRef("Topology 1-2", 0)}, <br/>
        {}      {renderRef("Differential Geometry", 0)}, // <span className="loading">in progress</span> <br/>
        {}    ] <br/>
        {}  {RIGHT_CURLY}, <br/>
        <br/>
        {}  "<span className="keywordGrey">Computer Science</span>": [ <br/>
        {}    <span className="keywordGrey">{renderRef("Algorithms Part I", 21)},  Coursera, Princeton University</span> [ <a href="https://www.coursera.org/learn/algorithms-part1/">link</a> ], // {renderRef("grade 98%", 22)} <br/>
        {}    <span className="keywordGrey">{renderRef("Algorithms Part II", 0)}, Coursera, Princeton University</span> [ <a href="https://www.coursera.org/learn/algorithms-part2/">link</a> ], // <span className="loading">in progress</span> <br/>
        {}  ], <br/>
        <br/>
        {}  "<span className="keywordGrey">Programming</span>": [ <br/>
        {}    <span className="keywordGrey">Python</span>,     // numpy, pandas. <br/>
        {}    <span className="keywordGrey">Go</span>,         // Toy project: [ <a href="https://github.com/dkaysin/mfw-bot">link</a> ] <br/>
        {}    <span className="keywordGrey">Haskell</span>,    // completed {renderRef("96 exercises", 31)} in Exercism. Solutions: [ <a href="https://github.com/dkaysin/exercism-haskell">link</a> ] <br/>
        {}    <span className="keywordGrey">Javascript</span>, // react.js, node.js. Toy project: [ this webpage ]<br/>
        {}    <span className="keywordGrey">git</span>,<br/>
        {}  ], <br/>
        <br/>
        {}  "<span className="keywordGrey">Research interests</span>": [ <br/>
        {}    <span className="keywordGrey">Automated theorem proving, <a href="http://leanprover.github.io/">Lean</a></span>,<br/>
        {}  ], <br/>

        {RIGHT_CURLY}
      </div>
      <div className="footerCode"> 
        <div className="blinking">
          <span>
            > built with 
            {} <span className="keywordBlue">react.js</span> >>
            {} <a href="https://github.com/dkaysin/my-page">source code</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Source;