const CS = ({ renderRef }) => {
  return (
    <>
      <span className="keywordGrey">{renderRef("Algorithms Part I", 21)}, Coursera, Princeton University</span>
      [&nbsp;<a href="https://www.coursera.org/learn/algorithms-part1/">link</a>&nbsp;],&nbsp;
        //&nbsp;{renderRef("grade\xa098%", "programming_grade")}<br />

      <span className="keywordGrey">{renderRef("Algorithms Part II", 999)}, Coursera, Princeton University</span>
      [&nbsp;<a href="https://www.coursera.org/learn/algorithms-part2/">link</a>&nbsp;], <span className="loading">
        //&nbsp;in&nbsp;progress</span>
    </>
  )
}

export default CS;
