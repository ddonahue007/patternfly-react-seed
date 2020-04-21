import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

export const ContactTable = props => {
  const columns = [
    { title: <div>ID</div> },
    { title: <div>Name</div> },
    { title: <div>Address</div> },
    { title: <div>Email</div> },
  ];

  return (
    <Table
      variant="compact"
      aria-label={props.caption}
      cells={columns}
      caption={props.caption}
      rows={props.rows
        .map((row) => ({
          cells: [
            { title: <div className='pf-m-fit-content'>{row.id}</div> },
            { title: <div>{row.name}</div> },
            { title: <div>{row.address}</div> },
            { title: <div>{row.email}</div> }
          ]
        }))}
    >
    <TableHeader />
    <TableBody />
    </Table>
  );
}
