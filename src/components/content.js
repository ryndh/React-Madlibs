import React, { Component } from 'react';

class Content extends Component {
    render() {
    const data= this.props.data
        return (
            <p className="completed-madlib">
            Ladies and gentlemen, this is <b>{data.color[1]}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun[1]}</b> and the <b>{data.adjectiveOne[1]}</b> Yankees. <b>{data.celebOne[1]}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adjectiveTwo[1]}</b> ball that just cuts the inside of the <b>{data.nounOne[1]}</b> for a strike. That makes the count <b>{data.numberOne[1]}</b> strikes and <b>{data.numberTwo[1]}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo[1]}</b> out to <b>{data.adjectiveThree[1]}</b> field. But <b>{data.celebTwo[1]}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree[1]}</b>, the Cleveland <b>{data.adjectiveFour[1]}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree[1]}</b>. <b>{data.celebFour[1]}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjectiveFive[1]}</b> League!
            </p>
        )
    }
}

export default Content;