import React, { Component } from 'react';
import Hero from "./herodata"
import AllMight from "../../../static/assets/images/All_Might_Both_Forms.png";
import Deku from "../../../static/assets/images/Izuku_Midoriya.png";
import Uravity from "../../../static/assets/images/Uravity.jpg";
import Bakugo from "../../../static/assets/images/Bakugo.jpg"


const heroData = [
    {Pic: AllMight, Name:"AllMight", Relation: "Teacher",Quirk: "One For All", Strengths:"", Weaknesses:""},
    {Pic: Deku, Name:"Deku", Relation: "Main Character",Quirk: "One For All", Strengths:"", Weaknesses:""},
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





