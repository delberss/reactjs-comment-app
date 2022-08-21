import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>My comments App!</h1>
      <Comment
        name="Delber Soares"
        email="delberss@hotmail.com"
        date= {new Date()}
        message="O Delber está aprendendo ReactJS"
      />

      <Comment
        name="Giovanna Menoncello"
        email="gio@hotmail.com"
        date={new Date()}
        message="Que legal que você está aprendendo ReactJS!"
      />
    </div>
  );
}

export default App;
