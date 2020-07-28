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
        const { title, content } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>Ajouter une prise</h2>
                    <div>
                        <input type="text" name="nom" placeholder="Titre du post" value={title} onChange={this.changeHandler}/>
                        <input type="text" name="prenom" placeholder="Titre du post" value={title} onChange={this.changeHandler}/>
                        <div>
                            <label id="">Poisson</label>
                            <select id="">
                                <option value="1">Anguille</option>
                                <option value="1">Brême</option>
                                <option value="1">Brochet</option>
                                <option value="1">Carassin</option>
                                <option value="1">Carpe</option>
                                <option value="1">Esturgeon</option>
                                <option value="1">Tanche</option>
                            </select>
                        </div>

                        <input type="text" name="taille" placeholder="Titre du post" value={title} onChange={this.changeHandler}/>
                        <input type="text" name="poid" placeholder="Titre du post" value={title} onChange={this.changeHandler}/>
                        <input type="text" name="content" placeholder="Titre du post" value={title} onChange={this.changeHandler}/>
                    </div>

                    <div><button type="submit" >Envoyer</button></div>
                </form>
            </div>
        )
    }
}

export default PostForm