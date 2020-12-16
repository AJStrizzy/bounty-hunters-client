import React, { Component } from 'react';
import FormField from '../components/FormField'
import { withRouter } from 'react-router-dom'

class New extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            wantedFor: '',
            client: '',
            reward: ''
        }
    }
    

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitForm = () => {
        fetch('http://localhost:3001/bounties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((json) => {
                this.props.history.push(`/show/${json.bounty._id}`)
            })
        })
    }
    render() { 
        return ( 
            <div>
                <h2>Create a new bounty</h2>
               <FormField labelLink='name' displayLabel='Name' 
               value={this.state.name} handler={this.handleInput} />

               <FormField labelLink='Wanted for' displayLabel='Wanted for' 
               value={this.state.wantedFor} handler={this.handleInput} />

               <FormField labelLink='Client' displayLabel='Client' 
               value={this.state.client} handler={this.handleInput} />

               <FormField labelLink='Reward' displayLabel='Reward' 
               value={this.state.reward} handler={this.handleInput} />

               <input type='submit' onCLick={this.submitForm} value='Create!' />
            </div>
         );
    }
}
 
export default withRouter(New);