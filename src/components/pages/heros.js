import React, { Component } from 'react';
import Hero from "./herodata"
import AllMight from "../../../static/assets/images/All_Might_Both_Forms.png";
import Deku from "../../../static/assets/images/Izuku_Midoriya.png";
import Uravity from "../../../static/assets/images/Uravity.jpg";
import Bakugo from "../../../static/assets/images/Bakugo.jpg"


const heroData = [
    {Pic: AllMight, Name:"All Might", Relation: "Teacher",Quirk: "One For All",
    Strengths:"The Power of his Quirk was passed down from his mentor, who received it from another. It's power increases as more people make use of it. It gave him super strength, speed and stamina", 
    Weaknesses:"The injury caused by Shigaraki, user of the quirk All For One, is a source of severe, irreparable internal damage that limits the amount of time All Might can retain his muscle form. When the time limit is up he reverts to his smaller and powerless form. Passing on his quirk to Izuku Midoriya has hastened the power loss."},
    {Pic: Deku, Name:"Deku", Relation: "Main Character",Quirk: "One For All", 
    Strengths:"Born quirkless, Izuku Midoriya is the successor of One For All. He has to constantly train his body in order for the shear power of the new quirk to not rip him apart. Slowly he has gone from every use breaking his body and nearly killing him to being about to control the flow of power used and to increase it over time. One such example of his growth is his ability to use former One For All holders power manifestations.", 
    Weaknesses:"Deku has had to train heavily to be able to handle One For All, and must maintain a harsh regimen of training to be able to bring out more of it and his own potential. His quirk to a heavy toll on his body and isn't always able to be controlled. the abilities of former users of One For All tend to manifest suddenly and are difficult to get under control."},
    {Pic: Uravity, Name:"Uravity", Relation: "Love Interest",Quirk: "Gravity", Strengths:"", Weaknesses:""},
    {Pic: Bakugo, Name:"Bakugo", Relation: "Rival",Quirk: "Explosion", Strengths:"", Weaknesses:""},
];




export default class Heros extends Component {
    constructor(props) {
        super();
    
        this.state = {
          heroArray: heroData,
          isOpen: true
        };
        this.heroData = this.heroData.bind(this)
    }
    heroData (){
        return this.state.heroArray.map(data =>{
            return <Hero
                    key={data.Name}
                    image={data.Pic}
                    name={data.Name}
                    relation={data.Relation}
                    quirk={data.Quirk}
                    strengths={data.Strengths}
                    weaknesses={data.Weaknesses}
                    />
        });
    }
    render() {
        return (
            <div className="items">
                {this.heroData()}
            </div>
        )
    };
    
}





