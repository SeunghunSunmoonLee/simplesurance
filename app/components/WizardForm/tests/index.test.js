import { shallow, mount } from 'enzyme';
import React from 'react';
import {store} from '../../../containers/app'
// import { IntlProvider } from 'react-intl';
import data from '../../../containers/App/data.json';
import WizardFormPage from '../WizardFormPage';
import WizardForm from '../index';

describe('<WizardForm />', () => {
  it('should render WizardFormPage firstpage', () => {
    let subject = null
  	let submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit
  	beforeEach(() => {
  		submitting = false
  		touched = false
  		error = null
  		reset = sinon.spy()
  		onSaveResponse = Promise.resolve()
  		handleSubmit = fn => fn
  	})
    const props = {
			onSave,
			submitting: submitting,
			// The real redux form has many properties for each field,
			// including onChange and onBlur handlers. We only need to provide
			// the ones that will change the rendered output.
			fields: {
				A01: {
					value: '',
					touched: touched,
					error: error
				}
			},
			handleSubmit,
			reset
		}
    // const firstQuestion = {
    //   id: 'A01',
    //   next: 'A02',
    //   reply: '',
    //   text: 'What happened to your product?',
    //   type: 'string',
    // }
    const html = `<div><ReduxForm page="0" question={{"id": "A01", "next": "A02", "reply": "", "text": "What happened to your product?", "type": "string"}} /></div>`
    const text = "What happened to your product?"
    const nextPage = () => {}
    // const renderedComponent = shallow(
    //   <WizardForm store={store} questions={data.questions} />
    // ).dive();
    const renderedComponent2 = shallow(
      <WizardFormPage {...props} store={store} page="0" onSubmit={jest.fn()} nextPage={jest.fn()} question={data.questions[0]} />
    ).dive();
    expect(renderedComponent2.html()).toEqual(html);
    // expect(renderedComponent.contains(
    //   <WizardFormPage page="0" onSubmit={jest.fn()} nextPage={jest.fn()} question={data.questions[0]} />
    // )).toEqual(true);
  });

  // it('should render an error if loading failed', () => {
  //   const renderedComponent = mount(
  //     <IntlProvider locale="en">
  //       <WizardForm
  //         loading={false}
  //         error={{ message: 'Loading failed!' }}
  //       />
  //     </IntlProvider>
  //   );
  //   expect(renderedComponent.text()).toMatch(/Something went wrong/);
  // });

  // it('should render the repositories if loading was successful', () => {
  //   const repos = [{
  //     owner: {
  //       login: 'mxstbr',
  //     },
  //     html_url: 'https://github.com/react-boilerplate/react-boilerplate',
  //     name: 'react-boilerplate',
  //     open_issues_count: 20,
  //     full_name: 'react-boilerplate/react-boilerplate',
  //   }];
  //   const renderedComponent = shallow(
  //     <WizardForm
  //       repos={repos}
  //       error={false}
  //     />
  //   );
  //
  //   expect(renderedComponent.contains(<List items={repos} component={RepoListItem} />)).toEqual(true);
  // });

  it('should not render anything if nothing is provided', () => {
    const renderedComponent = shallow(
      <WizardForm
        question={{}}
      />
    );

    expect(renderedComponent.html()).toEqual("<div></div>");
  });
});
