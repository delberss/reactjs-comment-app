import React from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends React.Component {

  state = {
    comments: [
      {
        name: "Delber Soares",
        email: "delberss@hotmail.com",
        date: new Date(),
        message: "Aprendendo ReactJS",
      },

      {
        name: "Giovanna Menoncello",
        email: "gio@hotmail.com",
        date: new Date(),
        message: "Legal que você está aprendendo ReactJS",
      },

    ],
  };

  addComment = () => {
    const newComment = {
      name: "Delber Soares",
      email: "delberss@hotmail.com",
      date: new Date(),
      message: "Aprendendo ReactJS",
    };

    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Comments App!</h1>
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
            key={index}
            name={comment.name}
            email={comment.email}
            date={comment.date}
            message={comment.message}
            />
          );
        })}
        <button onClick={this.addComment}>Adicionar Comentário</button>
      </div>
    );
  }
}

export default App;
