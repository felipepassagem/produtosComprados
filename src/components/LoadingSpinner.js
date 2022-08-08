import Spinner from 'react-bootstrap/Spinner';
import "../static/style.css"

function LoadingSpinner() {
  return (
      <Spinner animation="border" role="status">
      </Spinner>
  );
}

export default LoadingSpinner;