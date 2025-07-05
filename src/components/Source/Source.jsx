import "./Source.css";

import IUM from "./IUM.jsx";
import CS from "./CS.jsx";
import TechStack from "./TechStack.jsx";
import Footer from "./Footer.jsx";

const LEFT_CURLY_BRACKET = `{`;
const RIGHT_CURLY_BRACKET = `}`;
const LEFT_SQUARE_BRACKET = `[`;
const RIGHT_SQUARE_BRACKET = `]`;

const SYMBOL_WIDTH = 0.605;
const TAB_WIDTH = 2;

const IndentedBlock = ({ children, tab }) => {
  return (
    <div style={{ paddingLeft: tab * TAB_WIDTH * SYMBOL_WIDTH + "em" }}>
      {children}
    </div>
  );
};

const SquareBrackets = ({ children }) => {
  return (
    <>
      {LEFT_SQUARE_BRACKET}
      {children}
      {RIGHT_SQUARE_BRACKET}
    </>
  );
};

const CurlyBrackets = ({ children }) => {
  return (
    <>
      {LEFT_CURLY_BRACKET}
      {children}
      {RIGHT_CURLY_BRACKET}
    </>
  );
};

const Source = ({ renderRef }) => {
  return (
    <div className="terminal">
      <div className="code">
        <CurlyBrackets>
          <IndentedBlock tab={1}>
            {/* Tech Stack */}"<span className="keywordFill">Tech Stack</span>
            ":&nbsp;
            <SquareBrackets>
              <IndentedBlock tab={1}>
                <TechStack />
              </IndentedBlock>
            </SquareBrackets>
            <br />
            <br />
            {/* Mathematics */}"<span className="keywordFill">Mathematics</span>
            ":&nbsp;
            <CurlyBrackets>
              <IndentedBlock tab={1}>
                "
                <span className="keywordGrey">
                  Independent University of Moscow (
                  <a href="https://ium.mccme.ru/">НМУ</a>)
                </span>
                ":&nbsp;
                <SquareBrackets>
                  <IndentedBlock tab={1}>
                    <IUM renderRef={renderRef} />
                  </IndentedBlock>
                </SquareBrackets>
              </IndentedBlock>
            </CurlyBrackets>
            <br />
            <br />
            {/* Computer Science */}"
            <span className="keywordFill">Computer science</span>":&nbsp;
            <SquareBrackets>
              <IndentedBlock tab={1}>
                <CS renderRef={renderRef} />
              </IndentedBlock>
            </SquareBrackets>
            <br />
            <br />
          </IndentedBlock>
        </CurlyBrackets>

        <br />
        <br />
        // last update: 5 July 2025
      </div>

      <Footer />
    </div>
  );
};

export default Source;
