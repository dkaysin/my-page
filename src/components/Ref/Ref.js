import './Ref.css';

const Ref = ({text, onClick, onMouseDown}) => {
  return (
    <span 
      className = "ref" 
      onClick = {onClick}
      onMouseDown = {onMouseDown}
    >
      {text}
    </span>
  )
}

export default Ref;