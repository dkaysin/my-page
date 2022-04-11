import './Popup.css';
import { useMediaQuery } from 'react-responsive';


const popupDict = {
  999: () => {return (<span>TODO</span>)},
  11 : () => {return (
    <>
      <p>Vector spaces: abstract linear and affine spaces, dual space, linear maps;</p>
      <p>Affine geometry: barycentric coordinates, simplicies, action of linear and affine groups, convex sets, Helly's theorem, Carathéodory's theorem;</p>
      <p>Projective geometry: projective linear group, cross-ratio, Möbius group, Desargues's theorem;</p>
      <p>Euclidean spaces: determinant, volume, Cramer's rule, bilinear and quadratic forms, Cauchy-Schwarz inequality, triangle inequality, Gram-Schmidt process, classification of conics in ℂP<sup>2</sup> and ℝP<sup>2</sup>.</p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/484619">Yuri M. Burman</a> </p>
    </>
  )},
  13 : () => {return (
    <>
      <p>Foundations: sets, relations, functions, bijections, Cantor–Bernstein theorem, well-ordered sets, induction, axiom of choice, Zorn's lemma;</p>
      <p>Field ℝ: axiom of completeness, sequences, limits, series, Cauchy sequences;</p>
      <p>Metric spaces: complete metric spaces, completion, normed spaces, Baire category theorem, compactness, Hausdorff spaces, Cantor set;</p>
      <p>Continuous maps: Pointwise and uniform convergence, Brouwer fixed-point theorem;</p>
      <p>Differentiation: Differentiable functions, theorems of Rolle, Lagrange, Cauchy, mean value theorem, L'Hospital's rule, Taylor series.</p>
      <p> Professor: <a href="https://www.hse.ru/en/org/persons/104695101">Stanislav V. Shaposhnikov</a> </p>
    </>
  )},
  21 : () => {return (
    <>
      <p>Data structures: union-find, stacks, queues, binary heaps, binary search trees (including red-black BSTs, Kd-trees), hash tables (with separate chaining, linear probing); </p>
      <p>Algorithms: selection sort, insertion sort, shell sort, merge sort, quicksort, heapsort, and their applications, A*; </p>
      <p>Analysis of algorithms: amortized analysis of running time and memory usage. </p>
    </>
  )},
  22 : () => {return (<span>Grade is based on programming assignments in Java</span>)},
  31: () => {return (
    <>
      <p>Language features: recursion, currying, list comprehensions, maps, folds, algebraic types, higher order functions, strict vs lazy evaluation, monads and monad transformers, concurrency (atomic operations), parallelization, lenses; </p> <br/>
      <p>Functional data structures: stacks, queues, double-ended queues, sets, binary and rose trees, list and tree zippers; </p> <br/>
      <p>Algorithms and applications: operations on trees (traversing, searching, reparenting, path finding), dynamic programming with memoization, parsing, domain-specific language interpretation, state machines </p>
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