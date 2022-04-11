import './Document.css';

const Document = () => {
  return (
    <div className="document">
      <div className="page">
        <span className="headline">Experienced finance professional with proven track record in project management with strong quantitative background.</span>
        <span className="chapter">Work Experience</span>
        <span>
          I have worn many hats as a project manager during my 7 year career in private equity.
          Before that, I worked in management consulting, specializing in complex financial modelling.
          Currently on the lookout for new investment opportunities at <a href="http://gem.capital/about"> GEM Capital</a>.
        </span>
        {/*<span>I have worn many hats as a project manager during my 6 year career in private equity.</span>
        <span>Before that, I worked in management consulting, specializing in complex financial modelling.</span>
        <span>Currently on the lookout for new investment opportunities at <a href="http://gem.capital/about"> GEM Capital</a>.</span>*/}
        <span>Selected projects:  [TODO]</span>
        <br/>
        <div className="line"><span><span className="position"> GEM Capital, Investment Manager</span> | Moscow → Paphos, Cyprus </span> <span>Jan 2019 – currently</span></div>
        <div className="line"><span><span className="position"> Volga Group, Analyst → Project Manager</span> | Moscow </span> <span>Dec 2014 – Dec 2018</span></div>
        <div className="line"><span><span className="position"> Ernst&Young, Consultant → Senior Consultant</span> | Moscow </span> <span>Aug 2011 – Oct 2014</span></div>
        <br/>

        <span className="chapter">Certificates</span>
        <span>
          <span>Data-driven product management by <a href="https://simulator.gopractice.ru/certificate/53b0ec52-e48e-4e7c-9028-7b1c74dd07dd">Go Practice! Simulator</a></span>
        </span>
        <span>
          <span>CFA Charterholder (<a href="https://www.cfainstitute.org/en/programs/cfa">Chartered Financial Analyst</a>)</span>
        </span>
        <span>
          <span>Certified FRM (<a href="https://www.garp.org/frm">Financial Risk Manager</a>)</span>
        </span>
        <br/>

        <span className="chapter">Education</span>
        <span>I studied finance and valuation at Far Eastern Federal University in Vladivostok, Russia and graduated with Specialist diploma (≈BSc) with honours.</span>
        <span>Projects: Valuation of Convertible Bonds with Monte-Carlo Simulation, Implementation of Black-Litterman Portfolio Allocation Model for Emerging Markets.</span>
        <br/>

        <div className="line"><span className="chapter">Hobbies</span></div>
        <span>Music composition, audio recording and sound design;</span>
        <span>Travel photography;</span>
        <span>Losing skill in squash; dabbling in tennis.</span>

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