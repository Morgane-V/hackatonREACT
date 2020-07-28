import React from 'react';
import PostForm from './PostForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/post")
      .then(res => res.json())
      .then(posts => this.setState({items: posts}));
        /*=> console.log(posts));*/
  }

  render() {
    return (
      <div className="App">
        <PostForm />
        {this.state.items.map(items => (<p key= {items.id}>{items.photo} <br/> {items.prenom} {items.nom} <br/> {items.poisson} <br/> {items.poid} <br/> {items.taille} <br/> {items.content}</p>))}
      </div>
    )
  }
}


export default App;
