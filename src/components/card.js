import React, { Component } from 'react'

import Input from './input';
import Content from './content';
import { INITIAL_STATE } from './madlibs';
import Header from './header'


class Card extends Component {
    constructor() {
        super()

        this.state = INITIAL_STATE["1"];
    }

    render() {
        let html = []
        let i = 1
        for (let objkey in this.state) {
            if (objkey != "contentVisible" && objkey != "title" && this.state[objkey][1] != "false" ) {
                html.push(<Input key={i} index={i} placeholder={this.state[objkey][0]} label={this.state[objkey][0]} state={this.state[objkey][1]} onChange={(event) => this.setState({[objkey]: [[this.state[objkey][0]], event.target.value]})}/>)
                i++
            }
        }

        return (
            <div className="form-wrap">
            <Header title={this.state.title}/>
                <form className='form' onKeyPress={event => event.preventDefault()} onSubmit={(event) => {
                        event.preventDefault();
                        if (!this.state.contentVisible) {
                            this.setState({contentVisible: !this.state.contentVisible})
                        }
                        }
                    } onReset={() => {
                        event.preventDefault();
                        if (this.state.number[0] < 6) {
                            this.setState(INITIAL_STATE[(this.state.number[0] + 1).toString()])
                        } else {
                            this.setState(INITIAL_STATE["1"])
                        }
                        
                    }}>

                    <div className={this.state.contentVisible ? "card-hidden": "card-shown"}>
                        {html}  
                </div>
                    <div className="results">
                    <div className="buttons">
                        <div className='left-buttons'>
                        <button type="submit" className={this.state.contentVisible ? "buttons-hidden" : "buttons-shown"}>Generate</button>
                        <button type="button" onClick={() => this.setState(INITIAL_STATE[this.state.number[0].toString()])} className={this.state.contentVisible ? "buttons-hidden" : "buttons-shown"}>Reset</button>
                        </div>
                        <div className='right-buttons'>
                        <button type="button" onClick={() => this.state.number[0] < 2 ? this.setState(INITIAL_STATE["6"]) : this.setState(INITIAL_STATE[(this.state.number[0] - 1).toString()])} className={this.state.contentVisible | this.state.number[0].toString() == '1' ? "buttons-hidden" : "buttons-shown"}>Previous Madlib</button>
                        <button type="reset" className={this.state.contentVisible | this.state.number[0].toString() == "6" ? "buttons-hidden" : "buttons-shown"}>Next Madlib</button>
                        </div>
                    </div>
                    <Content storykey={this.state.number[0].toString()} close={() => this.setState({contentVisible: !this.state.contentVisible})} linkName={this.state.contentVisible ? "completed-wrap madlib-shown" : "completed-wrap madlib-hidden"} data={this.state}/>
                </div>

                </form>
            </div>
        )
    }
}

export default Card