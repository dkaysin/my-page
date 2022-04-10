import './Popup.css';

const popupDict = {
  1 : () => {return (
    <>
      <span> Data structures: union-find, stacks, queues, binary heaps, binary search trees (including red-black BSTs, Kd-trees), hash tables (with separate chaining, linear probing); </span> <br/>
      <span> Algorithms: selection sort, insertion sort, shell sort, merge sort, quicksort, heapsort, and their applications, A*; </span> <br/>
      <span> Analysis of algorithms: amortized analysis of running time and memory usage. </span>
    </>
  )},
  2 : () => {return (<span>Grade is based on programming assignments in Java</span>)},
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