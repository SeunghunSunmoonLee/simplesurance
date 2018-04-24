/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, render } from 'enzyme';
// import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import {store} from 'containers/app'

import WizardForm from 'components/WizardForm';
import { HomePage, mapDispatchToProps } from '../index';
import { Row, Col, Button } from 'antd';

describe('<HomePage />', () => {

  // Before each test reset the item data for safety
  beforeEach(() => {
  });

  it('should render two Rows and one WizardForm', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find(Row).length).toBe(2);
    expect(renderedComponent.find(WizardForm).length).toBe(1);

  });
});
