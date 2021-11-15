import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import NoteState from "./context/notes/NoteState"
import CreateNote from './components/CreateNote';


function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Link to="/createNote/">
            <div className="d-flex justify-content-end m-4">
              <button type="button" className="btn btn-primary"><i className="fas fa-plus-circle">Add Note</i></button>
            </div>
          </Link>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Switch>
            <Route exact path="/">
              <CreateNote />
              <Notes />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/createNote">
              <CreateNote />
            </Route>
            
          </Switch>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
