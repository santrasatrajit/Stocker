//import logo from '../logo.svg';
import '../style/App.css';
import { Header } from "semantic-ui-react";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div>
      <div className="App">
        <Header as="h1" className="stockHeader" style={{margin:0, minHeight: 50}} color="purple">Stocker</Header>
      </div>
      <div style={{marginTop: 30}}>
        <SideMenu/>
      </div>
    </div>
  );
}

export default App;
