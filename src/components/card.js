import React, { Component } from 'react'

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    color: ['Color', ''],
    pluralNoun: ['Plural Noun', ''],
    adjectiveOne: ['Adjective', ''],
    celebOne: ['Celebrity', ''],
    adjectiveTwo: ['Adjective', ''],
    nounOne: ['Noun', ''],
    numberOne: ['Number', ''],
    numberTwo: ['Number', ''],
    nounTwo: ['Noun', ''],
    adjectiveThree: ['Adjective', ''],
    celebTwo: ['Celebrity', ''],
    celebThree: ['Celebrity', ''],
    adjectiveFour: ['Adjective', ''],
    nounThree: ['Noun', ''],
    celebFour: ['Celebrity', ''],
    adjectiveFive: ['Adjective', ''],
}

class Card extends Component {
    constructor() {
        super()

        this.state = INITIAL_STATE;
    }

    render() {
        let html = []
        let i = 1
        for (let objkey in this.state) {
            if (objkey != "contentVisible") {
                html.push(<Input key={i} index={i} placeholder={this.state[objkey][0]} label={this.state[objkey][0]} state={this.state[objkey][1]} onChange={(event) => this.setState({[objkey]: [[this.state[objkey][0]], event.target.value]})}/>)
                i++
            }
        }

        return (
            <form onSubmit={(event) => {
                    event.preventDefault();
                    let results = document.getElementsByClassName("completed-madlib")[0].textContent;
                    alert(results)
                    }
                } onReset={() => {
                    event.preventDefault();
                    this.setState(INITIAL_STATE); 
                }}>

                <div className="card">
                    {html}  
               </div>
                <div className="results">
                    <button type="submit" className="buttons">Generate</button>
                    <button type="reset" className="buttons">Clear Form</button>
                    <Content data={this.state}/>
               </div>

            </form>
        )
    }
}

export default Card