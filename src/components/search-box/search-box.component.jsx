import { Component } from "react";

import "./search-box.styles.css";

//  CODED AS FUNCTIONAL COMPONENT
const SearchBox = ({ className, placeholder, onSearchChange }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

//  CODED AS CLASS COMPONENT
// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onSearchChange } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search-box"
//         placeholder={placeholder}
//         onChange={onSearchChange}
//       />
//     );
//   }
// }

export default SearchBox;
