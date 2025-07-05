const CS = ({ renderRef }) => {
  return (
    <>
      <span className="keywordGrey">
        {renderRef("Algorithms Part I", "algorithms_part_i")}, Coursera,
        Princeton University
      </span>
      &nbsp; [
        &nbsp;
        <a href="https://github.com/dkaysin/Algorithms-Coursera-solutions/tree/master/Part%20I">
          link
        </a>
        &nbsp;
      ],&nbsp; //&nbsp;{renderRef("grade\xa098%", "programming_grade")}
      <br />
      <span className="keywordGrey">
        {renderRef("Algorithms Part II", "tbd")}, Coursera, Princeton University
      </span>
      ,
      {/* [&nbsp;<a href="https://www.coursera.org/learn/algorithms-part2/">link</a>&nbsp;], */}
      <span className="loading">//&nbsp;in&nbsp;progress</span>
      <br />
      <span className="keywordGrey">
        {renderRef("Haskell Track", "haskell")}, Exercism
      </span>
      &nbsp;
      [
        &nbsp;
        <a href="https://github.com/dkaysin/exercism-haskell">link</a>
        &nbsp;
      ]
    </>
  );
};

export default CS;
