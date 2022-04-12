import './Popup.css';
import { useMediaQuery } from 'react-responsive';


const popupDict = {
  999: () => {return (<span>Description will be added later ;)</span>)},
  11 : () => {return ( // Linear algenra and geometry
    <>
      {/*<p></p>*/}
      <p><span className="keywordOrange">Vector spaces</span>: abstract linear and affine spaces, dual space, linear maps;</p>
      <p><span className="keywordOrange">Affine geometry</span>: barycentric coordinates, simplicies, action of linear and affine groups, convex sets, Helly's theorem, Carathéodory's theorem;</p>
      <p><span className="keywordOrange">Projective geometry</span>: projective linear group, cross-ratio, Möbius group, Desargues's theorem;</p>
      <p><span className="keywordOrange">Euclidean spaces</span>: determinant, Cramer's rule, bilinear and quadratic forms, Cauchy-Schwarz inequality, triangle inequality, Gram-Schmidt process.</p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/484619">Yuri M. Burman</a> </p>
    </>
  )},
  12 : () => {return ( // Algebra 1-2
    <>
      {/*<p></p>*/}
      {/*<p><span className="keywordOrange">Elements of combinatorics</span>: binomial and multinomial coefficients, partitions of a set, Young tableaus</p>*/}
      <p><span className="keywordOrange">Groups</span>: homomorphisms, group actions, orbit-stabilizer theorem, Sylow theorems, Jordan-Hölder theorem, free groups; </p>
      <p><span className="keywordOrange">Commutative rings</span>: ideals, quotient rings, prime ideals, maximal ideals, principal ideal domains, unique factorization domains, rings ℤ/(n) and 𝕜[x]/(f), Chinese remainder theorem;</p>
      <p><span className="keywordOrange">Fields</span>: field extensions, complex numbers, finite fields, fields of fractions, Laurent series, rational functions;</p>
      <p><span className="keywordOrange">Modules over commutative rings</span>: generators and relations, free modules, matrices, associative algebras, determinant, Grassman algebra, Cramer’s rule, Cayley-Hamilton theorem, Smith normal form, classification of finitely generated modules over PIDs;</p>
      <p><span className="keywordOrange">Vector spaces</span>: characteristic and minimal polynomials, nilpotent operators, eigenvalues and eigenspaces, Jordan normal form, rational canonical form, bilinear and quadratic forms, hermitian spaces, singular value decomposition; </p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/451657">Alexey L. Gorodentsev</a> </p>
    </>
  )},
  13 : () => {return ( // Analysis 1-2
    <>
      {/*<p></p>*/}
      <p><span className="keywordOrange">Foundations</span>: sets, relations, functions, Cantor–Bernstein theorem, well-ordered sets, induction, Zorn's lemma;</p>
      <p><span className="keywordOrange">Metric spaces</span>: field ℝ, axiom of completeness, sequences, limits, series, Cauchy sequences, Baire category theorem, compactness, Hausdorff spaces;</p>
      <p><span className="keywordOrange">Continuity and differentiation in ℝ</span>: pointwise and uniform convergence, Brouwer fixed-point theorem, differentiable functions, theorems of Rolle, Lagrange, Cauchy, mean value theorem, L'Hospital's rule, Taylor series;</p>
      <p><span className="keywordOrange">Normed spaces</span>: bounded linear functionals, Hahn–Banach theorem, Fréchet and Gateaux derivatives, implicit function theorem, inverse function theorem, Riemann integral;</p>
      <p><span className="keywordOrange">Measure theory</span>: σ-algebras, measurable function and sets, convergence a.e. and in measure, Lebesgue integral, Fubini's theorem, Radon–Nikodym theorem.</p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/104695101">Stanislav V. Shaposhnikov</a> </p>
    </>
  )},
  14 : () => {return ( // Topology 1-2
    <>
      {/*<p></p>*/}
      <p><span className="keywordOrange">Point-set topology</span>: continuity, homeomorphisms, Hausdorff spaces, connectedness and path connectedness, compactness, metric spaces, product topology, quotient topology;</p>
      <p><span className="keywordOrange">Homotopy</span>: homotopy category and functoriality, fundamental group, covering spaces, fundamental group of CW-complexes; </p>
      <p><span className="keywordOrange">Homology</span>: simplicial and singular complexes and their homology, chain homotopy, snake lemma, exact sequences, Mayer–Vietoris sequence, cellular homology, orientability of manifolds, degree of a continuous mapping; </p>
      <p><span className="keywordOrange">Cohomology</span>: basic properties, cup product, Künneth theorem. </p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/484619">Yuri M. Burman</a> </p>
    </>
  )},
  15 : () => {return ( // Analysis on manifolds
    <>
      {/*<p></p>*/}
      {/*<p><span className="keywordOrange">___</span>: </p>*/}
      <p><span className="keywordOrange">Fundamentals</span>: surfaces in Euclidean space and manifolds with and without boundary, tangent space, orientation;</p>
      <p><span className="keywordOrange">Smooth maps</span>: differentials, Whitney embedding theorem, Sard's theorem, degree of smooth map;</p>
      <p><span className="keywordOrange">Vector fields</span>: derivations, vector flow, commutator of vector fields, Lie derivative, Lie groups and algebras;</p>
      <p><span className="keywordOrange">Hausdorff measure</span>: construction, surface integral, integration by parts;</p>
      <p><span className="keywordOrange">Differential forms</span>: exterior product and exterior derivative, pullbacks, closed and exact differential forms, Poincaré's lemma, Stokes' theorem.</p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/104695101">Stanislav V. Shaposhnikov</a> </p>
    </>
  )},

  21 : () => {return (
    <>
      <p><span className="keywordOrange">Data structures</span>: union-find, stacks, queues, binary heaps, binary search trees (including red-black BSTs, Kd-trees), hash tables (with separate chaining, linear probing); </p>
      <p><span className="keywordOrange">Algorithms</span>: selection sort, insertion sort, shell sort, merge sort, quicksort, heapsort, and their applications, A*; </p>
      <p><span className="keywordOrange">Analysis of algorithms</span>: amortized analysis of running time and memory usage. </p>
    </>
  )},
  22 : () => {return (<span>Grade is based on programming assignments in Java</span>)},
  31: () => {return (
    <>
      <p><span className="keywordOrange">Language features</span>: recursion, currying, list comprehensions, maps, folds, algebraic types, higher order functions, strict vs lazy evaluation, monads and monad transformers, concurrency (atomic operations), parallelization, lenses; </p>
      <p><span className="keywordOrange">Functional data structures</span>: stacks, queues, double-ended queues, sets, binary and rose trees, list and tree zippers; </p> 
      <p><span className="keywordOrange">Algorithms and applications</span>: operations on trees (traversing, searching, reparenting, path finding), dynamic programming with memoization, parsing, domain-specific language interpretation, state machines </p>
    </>
    )}
}

const Popup = ({show, x, y, id, onClick}) => {
  let isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  let position;
  if (isMobile) {
    position = {
      left: '15px',     
      top: y + 'px',
      width: 'calc(100% - 30px)'
    }
  }
  else {
    position = {
      left: x + 'px',     
      top: y + 'px'
    }
  }
  if (show) {return (
      <div 
        style={position}
        className="popup" 
        onClick = {onClick}
      >
        {popupDict[id]()} 
      </div>
  )}
  else return null;
}

export default Popup;