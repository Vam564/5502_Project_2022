import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as XLSX from "xlsx";
import Home from './Home/Home'
import Header from './Header';
import DynamicTable from './DynamicTable/DynamicTable';
import { Footer } from './Footer';

const App = () => {

  return (
    <>
      {/* <div>App</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <p>Post Data</p>
      <pre>{JSON.stringify(postdata, null, 4)}</pre>
      <input type="file" onChange={onChange} />
      <input type="file" onChange={onChange} />
      <pre>{JSON.stringify(excelData, null, 4)}</pre>
      { excelData.length!== 0 && <DynamicTable tableData = {TableData}></DynamicTable>}
      <pre>{JSON.stringify(excelData, null, 4)}</pre> */}
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App