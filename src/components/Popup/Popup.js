import './Popup.css';

const popupDict = {
  999: () => {return (<span>TODO</span>)},
  21 : () => {return (
    <>
      <span> Data structures: union-find, stacks, queues, binary heaps, binary search trees (including red-black BSTs, Kd-trees), hash tables (with separate chaining, linear probing); </span> <br/>
      <span> Algorithms: selection sort, insertion sort, shell sort, merge sort, quicksort, heapsort, and their applications, A*; </span> <br/>
      <span> Analysis of algorithms: amortized analysis of running time and memory usage. </span>
    </>
  )},
  22 : () => {return (<span>Grade is based on programming assignments in Java</span>)},
  31: () => {return (
    <>
      <span> Language features: recursion, currying, list comprehensions, maps, folds, algebraic types, higher order functions, strict vs lazy evaluation, monads and monad transformers, concurrency (atomic operations), parallelization, lenses; </span> <br/>
      <span>Functional data structures: stacks, queues, double-ended queues, sets, binary and rose trees, list and tree zippers; </span> <br/>
      <span> Algorithms and applications: operations on trees (traversing, searching, reparenting, path finding), dynamic programming with memoization, parsing, domain-specific language interpretation, state machines </span>
    </>
    )}
}


const Popup = ({show, x, y, id, onClick}) => {
  let position = {
    left : x + 'px',     
    top : y + 'px'
  }
  if (show) {return (
    <div 
      className="popup" 
      style={position}
      onClick = {onClick}
    >
      {popupDict[id]()} 
    </div>
  )}
  else return null;
}

export default Popup;