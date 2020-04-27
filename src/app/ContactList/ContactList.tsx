import React from 'react';
import API from '@app/api';
import { ContactTable } from '@app/ContactTable/ContactTable';
import { PageSection } from '@patternfly/react-core';

class ContactList extends React.Component {
  public state = {
    customers: []
  }

  async componentDidMount() {
    await API.get('/customer', { crossdomain: true })
      .then(res => {
        const customers = res.data;
        this.setState({ customers })
      }).catch(error => {
        // TODO: add to logger
        console.log(`Axios request failed: ${error}`)
    });
  }

  public render() {
    return (
      <PageSection>
        <ContactTable caption="customers" rows={this.state.customers}/>
      </PageSection>
    )}
}

export { ContactList };
