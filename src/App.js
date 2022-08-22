import React from 'react';
import './App.css';
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';
import Swal from 'sweetalert2';


class App extends React.Component {

  state = {
    comments: [
      {
        name: "Delber Soares",
        email: "delber@delber.com",
        date: new Date(),
        message: "I'm learning ReactJS!",
      },
   
    ],

    form: {
      name:'',
      email:'',
      message:''
    }
  };

  addComment = (event) => {

    event.preventDefault();

    const newComment = {...this.state.form, date: new Date()};

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name:"",
        email:"",
        message:""
      }
    });
    Swal.fire("Your comment has successfully added!","","success");
  };

  onFieldChanged = (event) => {
    const newCommentForm = this.state.form;
    newCommentForm[event.target.name] = event.target.value;
    
    this.setState({
      form: newCommentForm,
    })
  }


  deleteCommentAlert = ( comment ) => {
    Swal.fire({
      title: 'Are you sure you want to delete this comment?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No, I changed my mind.',
      icon: "question",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteComment(comment);
        Swal.fire('Comment deleted!', '', 'success')
      } 
    })
  }

  deleteComment = ( comment ) => {
    // "preenche" a lista somente se o comentario atual
    // percorrido for diferente do que foi passado por parametro

    const filteredList = this.state.comments.filter(
      (commentFilter) => {
        return comment !== commentFilter
      });

    this.setState({
      comments: filteredList,
    });

  }

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
            onDeleteComment={() => {
              this.deleteCommentAlert(comment)}}
            />
          );
        })
        }
        <CommentForm
        onAddComment={this.addComment}
        onFieldChanged={this.onFieldChanged}
        form={this.state.form}
        />
      </div>
    );
  }
}

export default App;
