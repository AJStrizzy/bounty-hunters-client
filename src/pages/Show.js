import React, { Component } from 'react';

class Show extends Component {
    render() {  

        const hunterList = this.props.bounty.hunters.map((h) => {
            return <li>Name: {h.name}, Origing: {h.origin}</li>
        })
        return ( 
            <div>
                <h2>Wanted: {this.props.bounty.name}</h2>
                <p>Wanted for: {this.props.bounty.wantedFor}</p>
                <p>Client: {this.props.bounty.client}</p>
                <p>Last seen: {this.props.bounty.lastSeen}</p>
                <p>Reward: {this.props.bounty.reward}</p>

                <p>Hunters: </p>
                <ul>
                    {hunterList}
                </ul>
            </div>
         );
    }
}
 
export default Show;

