import { Component } from "react";

         //********************* Error Boundery *********************/
//*********************  Show this view when exist errors  *********************/

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        // eslint-disable-next-line react/prop-types
        return this.props.fallback;
      }
  
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  }

  export default ErrorBoundary