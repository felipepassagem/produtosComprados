import Spinner from 'react-bootstrap/Spinner';
import "../static/style.css"

function LoadingSpinner() {
  return (
    
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    
  );
}

export default LoadingSpinner;