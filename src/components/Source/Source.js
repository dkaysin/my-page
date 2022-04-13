import './Source.css';
import Flipper from '../Flipper/Flipper';
import { useMediaQuery } from 'react-responsive';

const LEFT_CURLY = `{`;
const RIGHT_CURLY = `}`;

const CodeLine = ({text, tab}) => {
  const SYMBOL_WIDTH = 0.605;
  const TAB_WIDTH = 2;
  let style = {"paddingLeft":tab*TAB_WIDTH*SYMBOL_WIDTH+"em"}
  return (
    <div style={style}>
      {text}
      <br/>
    </div>
  )
}

const Spaces = n => {
  let isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  return (
    "\xa0".repeat(isMobile ? 0 : n)
  ) 
}

const Source = ({renderRef}) => {
  return (
    <div className="terminal">
      <div className="code">
        {/*{}// <span className="keywordGrey">I love studying math and computer science</span><br/>*/}
        {/*<br/>*/}
        <CodeLine
          text={LEFT_CURLY}
          tab={0}
        />
        <CodeLine
          text={<>"<span className="keywordGrey">Programming</span>": [</>}
          tab={1}
        />
        <CodeLine
          text={<><span className="keywordGrey">Python</span>,{Spaces(5)} //&nbsp;numpy, pandas, matplotlib, requests</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">Go</span>,{Spaces(9)} //&nbsp;Pet&nbsp;project:&nbsp;[&nbsp;<a href="https://github.com/dkaysin/mfw-bot">link</a>&nbsp;]</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">Haskell</span>,{Spaces(4)} //&nbsp;Completed {renderRef("96\xa0exercises", 31)} in&nbsp;Exercism [&nbsp;<a href="https://github.com/dkaysin/exercism-haskell">link</a>&nbsp;]</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">Javascript</span>,{Spaces(1)} // react.js,&nbsp;node.js. Pet&nbsp;project:&nbsp;[&nbsp;<a href="">this&nbsp;page</a>&nbsp;]</>}
          tab={2}
        />    
        <CodeLine
          text={<><span className="keywordGrey">SQL, MongoDB</span>,</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">Git</span>,</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">Familiar with unit testing</span>,</>}
          tab={2}
        />     
        <CodeLine
          text={<><span className="keywordGrey">Experience with deployment to Heroku, GitHub Pages</span>,</>}
          tab={2}
        />
        <CodeLine
          text={<>{}  ],</>}
          tab={1}
        />
        <br/>

        <CodeLine
          text={<>"<span className="keywordGrey">Computer science</span>": [</>}
          tab={1}
        />
        <CodeLine
          text={<><span className="keywordGrey">{renderRef("Algorithms Part I", 21)},  Coursera, Princeton University</span> [&nbsp;<a href="https://www.coursera.org/learn/algorithms-part1/">link</a>&nbsp;], //&nbsp;{renderRef("grade\xa098%", 22)}</>}
          tab={2}
        />
        <CodeLine
          text={<><span className="keywordGrey">{renderRef("Algorithms Part II", 999)}, Coursera, Princeton University</span> [&nbsp;<a href="https://www.coursera.org/learn/algorithms-part2/">link</a>&nbsp;], <span className="loading">//&nbsp;in&nbsp;progress</span></>}
          tab={2}
        />
        <br/>
        
        <CodeLine
          text={<>"<span className="keywordGrey">Math</span>": {LEFT_CURLY}</>}
          tab={1}
        />
        <CodeLine
          text={<>"<span className="keywordGrey">Independent University of Moscow (<a href="https://ium.mccme.ru/">НМУ</a>)</span>": [</>}
          tab={2}
        />
        <CodeLine
          text={<>
              // Proof-based math courses from professors <Flipper normal="of HSE an" hovered="of ВШЭ an"/><Flipper normal="d MSU Math" hovered="d МГУ Math"/> departments
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Linear Algebra and Geometry", 11)},
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Real Analysis 1-2", 13)},
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Algebra 1-2", 12)},
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Analysis on Manifolds", 15)},
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Topology 1-2", 14)},
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              {renderRef("Differential Geometry", 999)}, <span className="loading">//&nbsp;in&nbsp;progress</span>
            </>}
          tab={3}
        />
        <CodeLine
          text={<>
              ],
            </>}
          tab={2}
        />
        <CodeLine
          text={<>
              {RIGHT_CURLY},
            </>}
          tab={1}
        />
        <br/>

        <CodeLine
          text={<>
              "<span className="keywordGrey">Current research interests</span>": [
            </>}
          tab={1}
        />
        <CodeLine
          text={<>
              <span className="keywordGrey">Automated theorem proving, <a href="http://leanprover.github.io/">Lean</a></span>,
            </>}
          tab={2}
        />
        <CodeLine
          text={<>
              ],
            </>}
          tab={1}
        />
        <CodeLine
          text={<>
              {RIGHT_CURLY},
            </>}
          tab={0}
        />
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