import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

export const ContactTable = props => {
  const columns = [
    { title: 'ID' },
    { title: 'Name' },
    { title: 'Address' },
    { title: 'Email' },
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
            <div className='pf-m-fit-content'>
              {row.id}
            </div>,
            <div>
              {row.name}
            </div>,
            <div>
              {row.address}
            </div>,
            <div>
              {row.email}
            </div>
          ]
        }))}
    >
    <TableHeader />
    <TableBody />
    </Table>
  );
}
