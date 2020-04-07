import React from 'react';
import API from '@app/api';
import { ContactTable } from '@app/ContactTable/ContactTable';
import { PageSection } from '@patternfly/react-core';

class ContactList extends React.Component {
  public state = {
    customers: []
  }

  public componentDidMount() {
    API.get(`http://${process.env.CUSTOMER_DEMO_API_SERVICE_HOST}:${process.env.CUSTOMER_DEMO_API_SERVICE_PORT_8080}/api/customer`)
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
