import logo from './logo.svg';
import './App.css';
import Header from './RealPage/Header';
import Body from './RealPage/Body';
import Footer from './RealPage/Footer';

function App() {
  return (
     <>
     <Header>
      <h1>UOH</h1>
      <h2>Semester GPA Generator</h2>
     </Header>
     <div id='bodier'>
     <Body />
     </div>
     <Footer>
       <h2>Created by kq</h2>
     </Footer>
     </>
 );
}

export default App;
