import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WizardFormPage = props => {
  const {handleSubmit, previousPage, question} = props
  let type = '';
  switch (question[0].type) {
    case 'string':
      type="text"
      break;
    case 'date':
      type="text"
      break;
    case 'number':
      type="text"
      break;
    case 'boolean':
      type="radio"
      break;
  }
  const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
          <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
          {touched && error && <span>{error}</span>}
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      {question[0].type == 'string' &&
        <Field
          name={question[0].id}
          type={type}
          component={renderField}
          label={question[0].text}
        />
      }
      {question[0].type == 'date' &&
        <Field
          name={question[0].id}
          type={type}
          component={renderDatePicker}
          label={question[0].text}
        />
      }
      <Field
        name={question[0].id}
        type={type}
        component={renderField}
        label={question[0].text}
      />
      <div>
        {previousPage &&
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
        }
        { question[0].next != null &&
          <button type="submit" className="next">Next</button>
        }
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormPage)
