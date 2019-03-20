import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './demo1/home/Home';
import About from './demo1/about/About';
import Topics from './demo1/topics/Topics';
import './demo1/styles/App.css';

import Child from './demo2/child/Child'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/about'>关于</Link></li>
                            <li><Link to='/topics'>主题列表</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </div>


                    <div>
                        <h2>账号</h2>
                        <ul>
                            <li><Link to="/react-router">React Router</Link></li>
                            <li><Link to="/leoashin">LeoAshin</Link></li>
                            <li><Link to="/justjavac">justjavac</Link></li>
                            <li><Link to="/reacttraining">React Training</Link></li>
                        </ul>
                        <hr/>
                        <Route path="/:id" component={Child}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
