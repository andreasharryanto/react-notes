import logo from './logo.svg';
import './App.css';
import UseStateTutorial from './hooks/UseStateTutorial';
import UseReducerTutorial from './hooks/UseReducerTutorial';
import UseEffectTutorial from './hooks/UseEffectTutorial';
import UseRefTutorial from './hooks/UseRefTutorial';
import UseLayoutEffectTutorial from './hooks/UseLayoutEffectTutorial';
import UseImperativeHandleTutorial from './hooks/UseImperativeHandle/UseImperativeHandleTutorial';
import UseContextTutorial from './hooks/UseContext/UseContextTutorial';
import UseMemoTutorial from './hooks/UseMemoTutorial';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <UseStateTutorial />
    // <UseReducerTutorial />
    // <UseEffectTutorial />
    // <UseRefTutorial />
    // <UseLayoutEffectTutorial />
    // <UseImperativeHandleTutorial />
    // <UseContextTutorial />
    <UseMemoTutorial />
  );
}

export default App;
