import { useMediaQuery } from "react-responsive";

const Spaces = (n) => {
  let isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  return "\xa0".repeat(isMobile ? 0 : n);
};

const TechStack = () => {
  const skills = [
    "Golang",
    "Python",
    "PostgreSQL",
    "Elasticsearch",
    "Redis",
    "Kafka",
    "Google Cloud",
  ];
  return (
    <>
      {skills
        .map((v, i) => {
          return (
            <span className="keywordGrey" key={i}>
              {v}
            </span>
          );
        })
        .reduce((prev, curr) => [prev, ", ", curr])}

      {/* <span className="keywordGrey">Go</span>,
      {Spaces(10)}
      //&nbsp;Toy&nbsp;project:&nbsp;[&nbsp;<a href="https://github.com/dkaysin/mfw-bot">link</a>&nbsp;]
      <br />

      <span className="keywordGrey">Python</span>,
      {Spaces(6)}
      //&nbsp;numpy, pandas, matplotlib, requests.
      Pet&nbsp;project:&nbsp;[&nbsp;<a href="https://github.com/dkaysin/visualline">link</a>&nbsp;]
      <br />

      <span className="keywordGrey">Haskell</span>,
      {Spaces(5)}
      //&nbsp;Completed {renderRef("96\xa0exercises", 31)} in&nbsp;Exercism [&nbsp;<a href="https://github.com/dkaysin/exercism-haskell">link</a>&nbsp;]
      <br />

      <span className="keywordGrey">Javascript</span>,
      {Spaces(2)}
      // react.js,&nbsp;node.js.
      Pet&nbsp;project:&nbsp;[&nbsp;<a href="">this&nbsp;page</a>&nbsp;]
      <br />

      <span className="keywordGrey">SQL, MongoDB</span>,
      <br /> */}
    </>
  );
};

export default TechStack;
