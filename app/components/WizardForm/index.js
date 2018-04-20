import React from 'react'
import PropTypes from 'prop-types'
import WizardFormPage from './WizardFormPage'

import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
// import WizardFormPage from './WizardFormPage'
class WizardForm extends React.Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 0
    }
  }
  componentDidMount() {
    let totalQuestions = ["A01"]
    let wizardFormArray = [<WizardFormPage page="0" question={ this.props.questions ? this.props.questions.filter(question => question.id=="A01") : {}} onSubmit={this.nextPage}/>]

    if(this.props.questions) {

      this.props.questions.map((question, index) => {
        if(question.next != null && !totalQuestions.includes(question.next)) {
          totalQuestions.push(question.next)
          wizardFormArray.push(
            <WizardFormPage
              page={index+1}
              question={this.props.questions.filter(questionn => questionn.id==question.next)}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />)
        }
      })
    }
    this.setState({wizardFormArray: wizardFormArray})
    const totalQuestionsNumber = totalQuestions.length
  }
  nextPage() {
    this.setState({page: this.state.page + 1})
  }

  previousPage() {
    this.setState({page: this.state.page - 1})
  }

  render() {
    const {onSubmit} = this.props
    const {page} = this.state

   //  totalQuestions.map(questionId, index => {
   //
   //  })
   //  const WizardFormPage = () => {
   //    switch(this.state.page) {
   //     case states.WELCOME:
   //       return(<Welcome next={this._next}/>);
   //     case states.VEHICLE_CHOOSE:
   //       return(<VehicleChoose
   //         back={this._back}
   //         next={this._next}/>);
   //     case states.CAR:
   //       return(<CarForm
   //         saveForm={this._saveVehicle}
   //         back={this._back}
   //         next={this._next} />);
   //     case states.BOAT:
   //       return(<BoatForm
   //         saveForm={this._saveVehicle}
   //         back={this._back}
   //         next={this._next} />);
   //     case states.BOAT_DETAIL:
   //      return(<BoatDetail
   //        back={this._back}
   //        next={this._next} />);
   //     case states.CONFIRM:
   //       return(<Confirm
   //         vehicles={this.state.vehicles}
   //         back={this._back}
   //         next={this._next} />);
   //     default:
   //       return(<Welcome next={this._next}/>);
   //   }
   // }
   // {wizardFormArray[this.state.page]}


   // {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
   // {page === 2 &&
   //   <WizardFormSecondPage
   //     previousPage={this.previousPage}
   //     onSubmit={this.nextPage}
   //   />}
   // {page === 3 &&
   //   <WizardFormThirdPage
   //     previousPage={this.previousPage}
   //     onSubmit={onSubmit}
   //   />}
    return (
      <div>

        {this.state.wizardFormArray && this.state.wizardFormArray[this.state.page]}

      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
