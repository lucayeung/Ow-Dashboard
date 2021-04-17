import React from 'react'
import 'handsontable/dist/handsontable.full.css';
import { HotTable } from '@handsontable/react';

export default function DataTable() {

  function getData() {
    return [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
  }

  return (
    <React.Fragment>
      <HotTable 
        licenseKey={'non-commercial-and-evaluation'}
        data={getData()} 
        colHeaders={true} 
        rowHeaders={true} 
        // width="600" 
        // height="300" 
      />
    </React.Fragment>
  )
}