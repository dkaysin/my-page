import './Source.css';

const LEFT_CURLY = `{`;
const RIGHT_CURLY = `}`;

const Source = ({renderRef}) => {
  return (
    <div className="terminal">
      <div className="code">
        {}// <span className="keywordGrey">I love studying math and computer science</span><br/>
        {LEFT_CURLY} <br/>

        {}  "<span className="keywordGrey">Math</span>": {LEFT_CURLY}<br/>
        {}    "<span className="keywordGrey">Independent University of Moscow (<a href="https://ium.mccme.ru/">НМУ</a>)</span>": [<br/>
        {}    // Proof-based math courses from professors of HSE and MSU Math departments<br/>
        {}      <span className="keywordGrey">{renderRef("Linear Algebra and Geometry", 0)}</span>, <br/>
        {}      <span className="keywordGrey">{renderRef("Algebra 1-2", 0)}</span>, <br/>
        {}      <span className="keywordGrey">{renderRef("Real Analysis 1-2", 0)}</span>, <br/>
        {}      <span className="keywordGrey">{renderRef("Analysis on Manifolds", 0)}</span>, <br/>
        {}      <span className="keywordGrey">{renderRef("Topology 1-2", 0)}</span>, <br/>
        {}      <span className="keywordGrey">{renderRef("Differential Geometry", 0)}</span>, // <span className="loading">in progress</span> <br/>
        {}    ] <br/>
        {}  {RIGHT_CURLY}, <br/>

        {}  "<span className="keywordGrey">Computer Science</span>": [ <br/>
        {}    <span className="keywordGrey"><a href="https://www.coursera.org/learn/algorithms-part1/">Coursera</a>, {renderRef("Algorithms Part I", 1)} (Princeton University)</span>,  // {renderRef("grade 98%", 2)} <br/>
        {}    <span className="keywordGrey">Coursera, {renderRef("Algorithms Part II", 0)} (Princeton University)</span>, // <span className="loading">in progress</span> <br/>
        {}  ], <br/>

        {}  "<span className="keywordGrey">Programming</span>": {LEFT_CURLY} <br/>
        {}    <span className="keywordGrey">Python</span>,     // numpy, pandas      <span className="keywordGrey"><a href="">Toy project</a></span> <br/>
        {}    <span className="keywordGrey">Go</span>,<br/>
        {}    <span className="keywordGrey">Haskell</span>,<br/>
        {}    <span className="keywordGrey">Javascript</span>, // react.js, node.js. <span className="keywordGrey"><a href="">Toy project</a></span> <br/>
        {}    <span className="keywordGrey">Experience with git</span>,<br/>
        {}  {RIGHT_CURLY}, <br/>
        {RIGHT_CURLY}
      </div>
      <div className="footerCode"> 
        <div className="blinking">
          <span>
            > built with 
            {} <span className="keywordBlue">react.js</span> >>
            {} <a href="">source code</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Source;