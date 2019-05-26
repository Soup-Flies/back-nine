import React from 'react';

import PolicyAndTerms from '../components/PolicyAndTerms.jsx';
import AgeInputForm from '../components/AgeInputForm.jsx';
import UnderAgeNotify from '../components/UnderAgeNotify.jsx';

import backNineLogo from '../../../assets/B9B_logo.png'
import frontNineLogo from '../../../assets/F9V_logo.png'

import '../style/verify.css'

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notVerified: false
    };
  }

  notOfAgeRedirect = "https://www.consumer.ftc.gov/features/feature-0028-we-dont-serve-teens"

  calculateAge = () => {
    const { day, month, year } = this.state;
    const birthday = new Date(year, month, day)
    const dif = Date.now() -  birthday.getTime()
    const ageDate = new Date(dif)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  underAgeUser = () => {
    this.setState({ notVerified: true })

    setTimeout(() => {
      window.location.href = this.notOfAgeRedirect
    }, 5000)
  }

  verifyAge = ofAge => {
    if (ofAge) {
      this.props.verifyUser()
    } else this.underAgeUser()
  } 


  render() {
    const display = this.state.notVerified ? 'block' : 'none'

    console.log("What are propsssss", this.props)

    return (
    <div className="Verify">
      <div className="logo-container">
        <img src={frontNineLogo} className="brand-logo" alt={"Front Nine Logo"} />
        <img src={backNineLogo} className="brand-logo" alt={"Back Nine Logo"} />
      </div>

      <UnderAgeNotify display={display} />

      <AgeInputForm verifyAge={this.verifyAge} />
 
      <PolicyAndTerms />
    </div>
    );
  }
}

export default Verify;