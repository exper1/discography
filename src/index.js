import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchDiscogs from './SearchDiscogs';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <div className='container'>
//         <h1 className='title'>Search Discogs</h1>
//         <SearchDiscogs/>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Discog Search</h1>
        <SearchDiscogs/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
