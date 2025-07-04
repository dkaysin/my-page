import './Source.css';
import { useMediaQuery } from 'react-responsive';

import IUM from './IUM.jsx';
import CS from './CS.jsx';
import TechStack from './TechStack.jsx';

const LEFT_CURLY_BRACKET = `{`;
const RIGHT_CURLY_BRACKET = `}`;
const LEFT_SQUARE_BRACKET = `[`;
const RIGHT_SQUARE_BRACKET = `]`;

const SYMBOL_WIDTH = 0.605;
const TAB_WIDTH = 2;

const IndentedBlock = ({ children, tab }) => {
  return (
    <div style={{ "paddingLeft": tab * TAB_WIDTH * SYMBOL_WIDTH + "em" }}>
      {children}
    </div>
  )
}

const SquareBrackets = ({ children }) => {
  return (
    <>
      {LEFT_SQUARE_BRACKET}
      {children}
      {RIGHT_SQUARE_BRACKET}
    </>
  )
}

const CurlyBrackets = ({ children }) => {
  return (
    <>
      {LEFT_CURLY_BRACKET}
      {children}
      {RIGHT_CURLY_BRACKET}
    </>
  )
}


const Footer = () => {
  return (
    <div className="footerCode">
      <div className="blinking">
        <span>
          {'>'} built with
          <span className="keywordBlue">react.js</span> {'>'}
          <a href="https://github.com/dkaysin/my-page">source code</a>
        </span>
      </div>
    </div>
  )
}

const Source = ({ renderRef }) => {
  return (
    <div className="terminal">
      <div className="code">
        <CurlyBrackets>
          <IndentedBlock tab={1}>

            "<span className="keywordFill">Tech Stack</span>":&nbsp;
            <SquareBrackets>
              <IndentedBlock tab={1}>

                <TechStack renderRef={renderRef} />

              </IndentedBlock>
            </SquareBrackets>
            <br />

            <br />

            "<span className="keywordFill">Computer science</span>":&nbsp;
            <SquareBrackets>
              <IndentedBlock tab={1}>

                <CS renderRef={renderRef} />

              </IndentedBlock>
            </SquareBrackets>
            <br />

            <br />

            "<span className="keywordFill">Mathematics</span>":&nbsp;
            <CurlyBrackets>
              <IndentedBlock tab={1}>
                "<span className="keywordGrey">Independent University of Moscow (<a href="https://ium.mccme.ru/">НМУ</a>)</span>":&nbsp;
                <SquareBrackets>
                  <IndentedBlock tab={1}>

                    <IUM renderRef={renderRef} />

                  </IndentedBlock>
                </SquareBrackets>
              </IndentedBlock>
            </CurlyBrackets>
            <br />

          </IndentedBlock>
        </CurlyBrackets>
      </div>

      <Footer />
    </div>
  )
}

export default Source;