
import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';


class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const  { handleCheckboxChange, canIAdd } = this.props;

    if(!canIAdd() && !this.state.isChecked){

        return;
    }

    const newState = !this.state.isChecked
    this.setState({isChecked: newState})
    

    handleCheckboxChange(this.props.myId, newState);

  }

  render() {
    const  label = this.props.label;
    const id = this.props.id;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={() => {this.toggleCheckboxChange() }}
                            //onChange={ /* add check herer */arrayLength< numberOfCards || this.state.isChecked ? this.//toggleCheckboxChange : console.log(`choose only ${numberOfCards} cards`)}
                            key={id}
                            className='input'
                        />

          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
