import React from 'react';

class AgeInputForm extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date()
    this.state = {
      day: '',
      month: '',
      year: '',
      currentYear: date.getFullYear(),
      currentMonth: date.getMonth(),
      currentDay: date.getDate()
    };
  }
  
  calculateAge = () => {
    const { day, month, year } = this.state;
    const birthday = new Date(year, month, day)
    const dif = Date.now() -  birthday.getTime()
    const ageDate = new Date(dif)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  ageVerify = e => {
    e.preventDefault()

    const age = this.calculateAge();
    const ofAge = age - 21 >= 0
    this.props.verifyAge(ofAge)
  }

  onChange = (e, min, max) => {
    const { target: { value, name } } = e;

    let inputValue = value;
    if (parseInt(value) < min || parseInt(value) > max) {
      inputValue = ''
    }

    this.setState({
      [name]: inputValue
    })
  };

  render() {
    return (
      <form onSubmit={this.ageVerify} >
        <input
          className={'age-input'}
          maxLength={'2'}
          placeholder={'MM'}
          name={'month'}
          value={this.state.month}
          onChange={e => this.onChange(e, 1, 12)}
        />
        <input
          className={'age-input'}
          maxLength={'2'}
          placeholder={'DD'}
          name={'day'}
          value={this.state.day}
          onChange={e => this.onChange(e, 1, 31)}
        />
        <input
          className={'age-input'}
          maxLength={'4'}
          placeholder={'YYYY'}
          name={'year'}
          value={this.state.year}
          onChange={e => this.onChange(e, 1, this.state.currentYear)}
        />
        <button
          className={'age-verify-button'}
          type={'submit'}
        >
          ENTER
        </button>
      </form>
    )
  }
}

export default AgeInputForm;