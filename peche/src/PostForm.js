import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastname: '',
            content: '',
            // picture: '',
            //id_fish: '',
            //size: 0
            // weight: ""
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/post', this.state, this.count)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        const { username, lastname,  content, size } = this.state
        return (
            <Container maxWidth="sm">
            <Box my={20} />
            <Grid container spacing={4} alignItems="center" justify="center">
                <Grid item xs={5}>
                <Box my={1} fontWeight="fontWeightBold" display="flex">
                    <Typography variant="h5" gutterBottom >Ajouter une prise</Typography>
                </Box>
                </Grid>
            </Grid>
            <Grid container spacing={4} alignItems="center" justify="center">
                <Grid item xs={6}>
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Nom</Typography>
                </Box>
                <TextField variant="outlined" name="lastname" placeholder="nom" value={lastname} onChange={this.changeHandler} />
                </Grid>
                <Grid item xs={6}>
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Prenom</Typography>
                </Box>
                <TextField variant="outlined" name="username" placeholder="Prenom" value={username} onChange={this.changeHandler} />
                </Grid>
{/*                 <Grid item xs={6} >
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Poissons</Typography>
                </Box>
                <Box width="223px">
                    <TextField
                    select
                    variant="outlined"
                    name="poisson"
                    fullWidth
                    value={this.state.poisson ?? ""}
                    onChange={this.changeHandler}
                    >
                    <MenuItem value="anguille">Anguille</MenuItem>
                    <MenuItem value="brême">Brême</MenuItem>
                    <MenuItem value="brochet">Brochet</MenuItem>
                    <MenuItem value="carassin">Carassin</MenuItem>
                    <MenuItem value="carpe">Carpe</MenuItem>
                    <MenuItem value="esturgeon">Esturgeon</MenuItem>
                    <MenuItem value="tanche">Tanche</MenuItem>
                    </TextField>
                </Box>
                </Grid>*/}
{/*                 <Grid item xs={6}>
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Taille</Typography>
                </Box>
                <TextField type="number" variant="outlined" name="size" placeholder="taille" value={size}  onChange={this.changeHandler} />
                </Grid> */}
{/*                 <Grid item xs={6}>
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Poid</Typography>
                </Box>
                <TextField variant="outlined" name="weight" placeholder="poid" value={weight} onChange={this.changeHandler} />
                </Grid> */}
                <Grid item xs={6}>
                <Box my={1} fontWeight="fontWeightBold">
                    <Typography variant="h5" gutterBottom>Content</Typography>
                </Box>
                <TextField variant="outlined" name="content" placeholder="content" value={content} onChange={this.changeHandler} />
                </Grid>
            </Grid>
            <Grid container spacing={4} alignItems="center" justify="center">
                <Grid item xs={4}>
                <Box mt={2} clone>
                    <Grid item xs={12}>
                    <Button variant="outlined" size="large" align="center" onClick={this.submitHandler}>Valider</Button>
                    </Grid>
                </Box>
                </Grid>
            </Grid>
            </Container>
        )
        }
    }

export default PostForm