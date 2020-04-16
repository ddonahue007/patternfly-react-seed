import React from 'react';
import API from '@app/api';
import { ContactTable } from '@app/ContactTable/ContactTable';
import { PageSection } from '@patternfly/react-core';

class ContactList extends React.Component {
  public state = {
    customers: []
  }

  public componentDidMount() {
    console.log('API HOST: %s', process.env.API_HOST)
    console.log('API PORT: %s', process.env.API_PORT)

    API.get(`http://${process.env.API_HOST}:${process.env.API_PORT}/api/customer`)
      .then(res => {
          const customers = res.data;
          this.setState({ customers })})
  }

  public render() {
    return (
      <PageSection>
        <ContactTable caption="customers" rows={this.state.customers}/>
      </PageSection>
    )}
}

export { ContactList };
