import React from 'react';
import FilterContext from './FilterContext';

class FilterContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      cars: [],
      novelties: []
    };
  }

  updateFilter = (filter) => {
    this.setState({ filter });
  };
  
  // Liste des véhicules
  updateCars = (cars) => {
    this.setState({ cars });
  }

  // Seulement la liste des dernières acquisitions
  updateNovelties = (novelties) => {
    this.setState({ novelties });
  }

  render () {
    return (
      <FilterContext.Provider value={{
        ...this.state,
        updateFilter: this.updateFilter,
        updateCars: this.updateCars,
        updateNovelties: this.updateNovelties
      }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export default FilterContextProvider;
