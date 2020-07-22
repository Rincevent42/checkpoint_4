import React from 'react';
import FilterContext from './FilterContext';

class FilterContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      cars: []
    };
  }

  updateFilter = (filter) => {
    this.setState({ filter });
  };
  
  updateCars = (cars) => {
    this.setState({ cars });
  }

  render () {
    return (
      <FilterContext.Provider value={{
        ...this.state,
        updateFilter: this.updateFilter,
        updateCars: this.updateCars
      }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export default FilterContextProvider;
