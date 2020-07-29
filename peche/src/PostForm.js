import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/post', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { username, lastname, size, weight, content, picture } = this.state
        return (
            <div>
                
                <form onSubmit={this.submitHandler}>
                    <h2>Ajouter une prise</h2>
                    <div>
                        <div>
                            <label id="">Poisson : </label>
                            <select id="">
                                <option value="1">Anguille</option>
                                <option value="2">Brême</option>
                                <option value="3">Brochet</option>
                                <option value="4">Carassin</option>
                                <option value="5">Carpe</option>
                                <option value="6">Esturgeon</option>
                                <option value="7">Tanche</option>
                            </select>
                        </div>
                        <br/>
                        <input type="text" name="username" placeholder="Prénom" value={username} onChange={this.changeHandler}/><br/><br/>
                        <input type="text" name="lastname" placeholder="Nom" value={lastname} onChange={this.changeHandler}/><br/><br/>
                        <input type="text" name="size" placeholder="Taille du poisson" value={size} onChange={this.changeHandler}/>
                        <label for="picture"> cm </label><br/><br/>
                        <input type="text" name="weight" placeholder="Poid du poisson" value={weight} onChange={this.changeHandler}/>
                        <label for="picture"> gr </label><br/><br/>
                        <textarea type="text" name="content" placeholder="Texte" value={content} onChange={this.changeHandler}/><br/><br/>
                        <div>
                            <label for="picture">Choisir une photo de votre prise : </label>
                            <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" valu={picture} onChange={this.changeHandler}/>
                        </div>
                    </div>
                    <br/>
                    <div><button type="submit">Poster ma prise</button></div>
                </form>
            </div>
        )
    }
}

export default PostForm