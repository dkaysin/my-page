import './Document.css';

const Document = () => {
  return (
    <div className="document">
      <div className="page">
        <span className="headline">Experienced project manager with proven track record in finance, strong quantitative background and passion for math and computer science.</span>
        <span className="chapter">Work Experience</span>
        <span>
          I have worn many hats as a project manager during my 7 year career in private equity.
          Before that, I worked in management consulting, specializing in complex financial modelling.
          Currently on the lookout for new investment opportunities at <a href="http://gem.capital/about"> GEM Capital</a>.
        </span>
        {/*<span>I have worn many hats as a project manager during my 6 year career in private equity.</span>
        <span>Before that, I worked in management consulting, specializing in complex financial modelling.</span>
        <span>Currently on the lookout for new investment opportunities at <a href="http://gem.capital/about"> GEM Capital</a>.</span>*/}
        {/*<span>Selected projects:  [TODO]</span>*/}
        {/*<br/>*/}
        <div className="line"><span><span className="position"> GEM Capital, Investment Manager</span>&nbsp;| Moscow&nbsp;→&nbsp;Paphos,&nbsp;Cyprus&nbsp;🏝</span> <span>Jan&nbsp;2019&nbsp;–&nbsp;currently</span></div>
        <div className="line"><span><span className="position"> Volga Group, Analyst → Project Manager</span>&nbsp;| Moscow </span> <span>Dec&nbsp;2014&nbsp;–&nbsp;Dec&nbsp;2018</span></div>
        <div className="line"><span><span className="position"> Ernst&Young, Consultant → Senior Consultant</span>&nbsp;| Moscow</span> <span>Aug&nbsp;2011&nbsp;–&nbsp;Oct&nbsp;2014</span></div>
        <br/>

        <span className="chapter">Certificates</span>
        <p>Data-driven product management by <a href="https://simulator.gopractice.ru/certificate/53b0ec52-e48e-4e7c-9028-7b1c74dd07dd">Go Practice! Simulator</a></p>
        <p>CFA Charterholder (<a href="https://www.cfainstitute.org/en/programs/cfa">Chartered Financial Analyst</a>)</p>
        <p>Certified FRM (<a href="https://www.garp.org/frm">Financial Risk Manager</a>)</p>
        <br/>

        <span className="chapter">Education</span>
        <span>I studied finance and valuation at Far Eastern Federal University in Vladivostok, Russia and graduated with Specialist diploma (≈BSc) with honours.</span>
        <span>Projects: Valuation of Convertible Bonds with Monte-Carlo Simulation, Implementation of Black-Litterman Portfolio Allocation Model for Emerging Markets.</span>
        <br/>

        <div className="line"><span className="chapter">Hobbies</span></div>
        <p>Music composition, audio recording and sound design;</p>
        <p>Travel photography;</p>
        <p>Losing skill in squash; dabbling in tennis.</p>

      </div>
      


      <div className="footerDocument"> 
        <span>
          built with 
          {} <span className="keywordBlue">react.js</span>
          {} (<a href="https://github.com/dkaysin/my-page">source code</a>)
        </span>
      </div>
    </div>
  )
}

export default Document;