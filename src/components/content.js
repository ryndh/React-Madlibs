import React, { Component } from 'react';

class Content extends Component {
    render() {
    const data= this.props.data
    
    
    const stories = {
        
        "1": <p>
        Ladies and gentlemen, this is <b className="madlib-variable">{data.one[1]}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b className="madlib-variable">{data.two[1]}</b> and the <b className="madlib-variable">{data.three[1]}</b> Yankees. <b className="madlib-variable">{data.four[1]}</b> is pitching for the Yankees. Here's the pitch! It's a low <b className="madlib-variable">{data.five[1]}</b> ball that just cuts the inside of the <b className="madlib-variable">{data.six[1]}</b> for a strike. That makes the count <b className="madlib-variable">{data.seven[1]}</b> strikes and <b className="madlib-variable">{data.eight[1]}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b className="madlib-variable">{data.nine[1]}</b> out to <b className="madlib-variable">{data.ten[1]}</b> field. But <b className="madlib-variable">{data.eleven[1]}</b> is coming up fast and has it for the second out. The next batter up is <b className="madlib-variable">{data.twelve[1]}</b>, the Cleveland <b className="madlib-variable">{data.thirteen[1]}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b className="madlib-variable">{data.fourteen[1]}</b>. <b className="madlib-variable">{data.fifteen[1]}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b className="madlib-variable">{data.sixteen[1]}</b> League!
        </p>,

        "2": <p>
        It was a <b className="madlib-variable">{data.one[1]}</b> night out in codesville...in fact, it was raining so <b className="madlib-variable">{data.two[1]}</b> that you could hardly <b className="madlib-variable">{data.three[1]}</b>! Rumor had it that <b className="madlib-variable">{data.four[1]}</b> was coming to visit, but with the weather like it was, we were afraid it wouldn't happen. Just then, <b className="madlib-variable">{data.four[1]}</b> walked in with a pet <b className="madlib-variable">{data.five[1]}</b>! "Sorry I'm late everyone, <b className="madlib-variable">{data.four[1]}</b> said. The weather was <b className="madlib-variable">{data.six[1]}</b> today and on top of that, today of all days my <b className="madlib-variable">{data.seven[1]}</b> decided to <b className="madlib-variable">{data.eight[1]}</b>. Can you believe that? Anyways, we need to keep this meetup short, because I need to get going to my <b className="madlib-variable">{data.nine[1]}</b>'s appointment. Then I have to call <b className="madlib-variable">{data.ten[1]}</b> afterwards to go over how it went. In fact, I should probably get going right now otherwise I'll be late for that too! Tell you what. To make up for it, I'll give everyone in class a free <b className="madlib-variable">{data.eleven[1]}</b> and we'll reschedule this for another time. How does next <b className="madlib-variable">{data.twelve[1]}</b> work? I'll be sure to arrive early so we'll have plenty of time for <b className="madlib-variable">{data.thirteen[1]}</b> Thanks for understanding!" And with that, <b className="madlib-variable">{data.four[1]}</b> walked out the door with the <b className="madlib-variable">{data.five[1]}</b> and hopped into a <b className="madlib-variable">{data.fourteen[1]}</b> and left. "Wow, <b className="madlib-variable">{data.fifteen[1]}</b> said. <b className="madlib-variable">{data.four[1]}</b> sure is <b className="madlib-variable">{data.sixteen[1]}</b>. 
        </p>,

        "3":<p>
        Long ago in <b className="madlib-variable">{data.one[1]}</b>, there was a band of <b className="madlib-variable">{`${data.two[1]}s`}</b> who were <b className="madlib-variable">{data.three[1]}</b> hunters. <br/> They were <b className="madlib-variable">{data.four[1]}</b> with a bow and arrow, but better with a <b className="madlib-variable">{data.five[1]}</b>. <br/>There was a great competition held in which the hunters competed to see who was the most <b className="madlib-variable">{data.six[1]}</b> with a crossbow, <b className="madlib-variable">{data.seven[1]}</b> with a sword, and who was the best at <b className="madlib-variable">{data.eight[1]}</b>.<br/>The day of the competition, the king declared that the winner would receive <b className="madlib-variable">{`${data.nine[1]},000`}</b> <b className="madlib-variable">{data.ten[1]}</b>! <br/>The competitors were <b className="madlib-variable">{data.eleven[1]}</b> at the announcement. <br/>The hunters competed <b className="madlib-variable">{data.twelve[1]}</b> to win the competition, but in the end, Sir <b className="madlib-variable">{data.thirteen[1]}</b> won the competition by <b className="madlib-variable">{data.fourteen[1]}</b> points. <br/>True to his word, the king handed over the <b className="madlib-variable">{`${data.nine[1]},000`}</b> <b className="madlib-variable">{data.ten[1]}</b> 
        </p>,

        "4":<p>
        There once was a boy named <b className="madlib-variable">{data.one[1]}</b>. He had <b className="madlib-variable">{data.two[1]}</b> hair, <b className="madlib-variable">{data.three[1]}</b> eyes and a smile as big as a <b className="madlib-variable">{data.four[1]}</b>. He liked to play <b className="madlib-variable">{data.five[1]}</b> every day. One day while playing, his shoe came untied and he fell to the ground like a/an <b className="madlib-variable">{data.six[1]}</b>. He was so embarrased, and his face turned bright <b className="madlib-variable">{data.seven[1]}</b>. his friends all <b className="madlib-variable">{data.eight[1]}</b> at his <b className="madlib-variable">{data.nine[1]}</b> display. Fortunately, being the <b className="madlib-variable">{data.ten[1]}</b> little guy he was, he was able to laugh it off and still enjoy the game.
        </p>,

        "5":<p>
        John decided to help out on <b className="madlib-variable">{data.one[1]}</b> and make his family dinner. He decided to make <b className="madlib-variable">{data.two[1]}</b> and <b className="madlib-variable">{data.three[1]}</b>. He thought it would take him about <b className="madlib-variable">{data.four[1]}</b> minutes to complete the meal. He got out the <b className="madlib-variable">{data.five[1]}</b> pot and put it on the <b className="madlib-variable">{data.six[1]}</b> stove. After adding the ingredients, he used a <b className="madlib-variable">{data.seven[1]}</b> to stir it. He must have had the heat on too high, because it started <b className="madlib-variable">{data.eight[1]}</b> all over the stove and floor and ruined the <b className="madlib-variable">{data.nine[1]}</b>. This also caused the kitchen to smell like a <b className="madlib-variable">{data.ten[1]}</b>. When the rest of the family got home, they took one look at the kitchen and decided that eating at <b className="madlib-variable">{data.eleven[1]}</b> would be a much better idea.
        </p>,

        "6":<p>
        Every <b className="madlib-variable">{data.one[1]}</b> Sarah and Sue would walk to the park together. They were great friends. One day as they walked they found a <b className="madlib-variable">{data.two[1]}</b> on the sidewalk. It was <b className="madlib-variable">{data.three[1]}</b> and <b className="madlib-variable">{data.four[1]}</b> and felt like it weighed as much as a <b className="madlib-variable">{data.five[1]}</b>! They decided to carry it with them so they could play with it at the park. They took it on the <b className="madlib-variable">{data.six[1]}</b> slide, and then over to the <b className="madlib-variable">{data.seven[1]}</b> swings. At first it was fun, but after a while they got bored of it and decided to leave it by the <b className="madlib-variable">{data.eight[1]}</b> bench. But when they went to put it down, it slipped and landed on Sarah's foot, which made her <b className="madlib-variable">{data.nine[1]}</b>.
        </p>,

        // "7":<p>
        // <b className="madlib-variable">{data.one[1]}</b> <b className="madlib-variable">{data.two[1]}</b> <b className="madlib-variable">{data.three[1]}</b> <b className="madlib-variable">{data.four[1]}</b> <b className="madlib-variable">{data.five[1]}</b> <b className="madlib-variable">{data.six[1]}</b>  <b className="madlib-variable">{data.seven[1]}</b> <b className="madlib-variable">{data.eight[1]}</b> <b className="madlib-variable">{data.nine[1]}</b> <b className="madlib-variable">{data.ten[1]}</b> <b className="madlib-variable">{data.eleven[1]}</b> <b className="madlib-variable">{data.twelve[1]}</b> <b className="madlib-variable">{data.thirteen[1]}</b> <b className="madlib-variable">{data.fourteen[1]}</b> <b className="madlib-variable">{data.fifteen[1]}</b> <b className="madlib-variable">{data.sixteen[1]}</b> 
        // </p>,
        
    }
        return (
            <div className={this.props.linkName} >
                {stories[this.props.storykey]}
                <a className="close-button" onClick={this.props.close}>Close</a>
            </div>
        )
    }
}

export default Content;