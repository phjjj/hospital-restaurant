import React from 'react'
import HospitalList from './HospitalList'

describe('<HospitalList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HospitalList />)
  })
})