import './Document.css';

const Document = () => {
  return (
    <div className="document">
      <div className="page">
        <div className="line"><span className="chapter">Work Experience</span></div>
        <span>
          I have worn many hats in project management during my 6 year career in private equity.
          Before that, I specialized in complex financial modelling at Ernst&Young.
          Currently, on the lookout for new investment opportunities at <a href="http://gem.capital/"> GEM Capital</a>.
        </span>
        <span>
          
        </span>
        <br/>
        <div className="line"><span className="company"> GEM Capital, Investment Manager </span> <span> Paphos, Cyprus </span></div>
        <div className="line">International investment company operating in private equity and venture capital markets. Today GEM Capital's portfolio includes more than 25 projects with origins in Europe, the US, Israel and the CIS. </div>
        <br/>
        <div className="line"><span className="company"> Volga Group, Analyst → Project Manager </span> <span> Moscow, Russia </span></div>
        <div className="line">Managed relationships with portfolio companies and was responsible for preparation of recommendations for the Board of Directors (coal, petrochemicals, oil&gas, real estate, FMCG); </div>
        <div className="line">Was involved in cross-functional projects within portfolio companies. </div>
        <br/>

        <div className="line"><span className="company"> Ernst&Young, Consultant → Senior Consultant </span> <span> Moscow, Russia </span></div>
        <div className="line">Built complex financial and operational models that were used for assessing and managing value of business (telecommunications, microelectronics, chemicals, oil&gas, fertilizers);</div>
        <div className="line">Developed and implemented a Monte-Carlo methodology for valuation of a management company of an investment fund with high-risk project portfolio;</div>
        <div className="line">Developed an algorithm for detecting related companies and inter-company transactions, which saved 20-30 person-hours per project. Held a technical workshop for the client on implementation details (~40 participants). My implementation was subsequently used on 3 similar projects. </div>
        <br/>

        <span className="chapter">Formal education</span>
        <span>I studied finance and valuation at Far Eastern Federal University in Vladivostok, Russia and graduated with Specialist diploma (≈BSc) with honours.</span>
        <span>Projects: Valuation of Convertible Bonds with Monte-Carlo Simulation, Implementation of Black-Litterman Portfolio Allocation Model for Emerging Markets (both implemented in R)</span>
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

        <div className="line"><span className="chapter">Hobbies</span></div>
        <span>Music composition, audio recording and sound design;</span>
        <span>Travel photography;</span>
        <span>Losing skills in squash; dabbling in tennis.</span>

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