import { Component } from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

//  CODED AS FUNCTIONAL COMPONENT
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

//  CODED AS CLASS COMPONENT
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card key={monster.id} monster={monster} />
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;
