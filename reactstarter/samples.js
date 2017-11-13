import React from 'react';
import ReactDOM from 'react-dom';

const houseM2 = 35;

const Fishie = (props) => {
    return(
        <p>I am {props.fish.name} and my ID is {props.fish.id}</p>
    );
};

const FishBowl = (props) => {
    var fishes = [];
    for(let i = 0; i < props.count; i++) {
        const fishName = "Fish " + i;
        fishes.push({id: i, name: fishName});
    }

    return (
        <div>
            {fishes.map(e => <Fishie fish={e} key={e.id} />)}
        </div>
    )
};

const Pets = (props) => {
    if(houseM2 >= 50) {
        return <p>We kept the dog</p>;
    } else {
        return <FishBowl count="15"/>;
    }
};

ReactDOM.render(<Pets houseM2/>, document.getElementById("app"));

// const MyComponent = (props) => {
//     return (
//         <div>
//             <h1>Hello from the other side</h1>
//             <Veggies />
//         </div>
//     );
// };

// const Veggies = () => {
//     return (
//         <div>
//             <ul>
//                 <li>Cauliflower</li>
//                 <li>Broccoli</li>
//                 <li>Eggplant</li>
//             </ul>
//         </div>
//     );
// };

// ReactDOM.render(<MyComponent />, document.getElementById("app"));

// let osoba = {
//     name: "Sofronije",
//     hobby: "stamps",
//     drink: "beer"
// }

// const domText = (props) => {
//     return (
//         <div>
//             <h1>Hi, I'm <span style={{"color": "#ff0057"}}>{props.name}</span></h1>
//             <p style={{"fontSize": "3em", "marginLeft": "25px"}}>I like {props.hobby} and {props.drink}.</p>
//         </div>
//     );
// };

// const domPic = () => {
//     return (
//         <img src="https://petcube.com/blog/content/images/2017/04/kitten-supplies-cover-1.jpg"/>
//     );
// };

// const together = (props) => {
//     return (
//         <div>
//             {domText(props)}
//             {domPic(props)}
//         </div>
//     );
// };

// ReactDOM.render(together (osoba), document.getElementById("app"));