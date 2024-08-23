
import logo from './logo.jpg'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo}  alt="logo" /> 
        <h1> School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard </p> 
        <section className="App-form">
          <fieldset>
            <label htmlfor="email"> Email:<input type="email" name="email"/> </label>
            <label htmlfor="password">password:  <input name="password" type="password"/></label>
          </fieldset>
          <button> OK</button>
        </section>
      </body>
      <footer className="App-footer">
                <p>Copyright 2020 - holberton School </p>
        </footer>
    </div>
  );
}

export default App;
