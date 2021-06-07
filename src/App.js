import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
