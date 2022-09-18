import React from 'react';
import './App.css';
// custom components and styles
import './ui.css';
import Greeting from './components/Greeting';
import ResultApp from './components/ResultApp';

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {!isLoaded && <Greeting />}
      {
        isLoaded && (
          <ResultApp />
        )
      }
    </div>
  );
}

export default App;
