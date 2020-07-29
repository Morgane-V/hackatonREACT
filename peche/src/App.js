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
        {this.state.items.map(items => (<p key={items.id}>{items.picture} <br /> {items.lastname} {items.username} <br /> {items.fish} <br /> {items.weight} <br /> {items.size} <br /> {items.content}</p>))}
      </div>
    )
  }
}


export default App;
