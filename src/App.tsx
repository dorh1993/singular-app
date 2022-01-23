import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table } from './components/Table';

const tableColumns = [
  {
    Header: 'Company',
    accessor: 'display_name',
    filter: 'fuzzyText',
  },
  {
    Header: 'Country',
    accessor: 'country',
    filter: 'fuzzyText',
  },
  {
    Header: 'Installs',
    accessor: 'installs',
    filter: 'fuzzyText',
  },
  {
    Header: 'ROI',
    accessor: 'roi',
    filter: 'fuzzyText',
  },
  {
    Header: 'Industry ROI',
    accessor: 'industry-roi',
    filter: 'fuzzyText',
  }
];

function App() {
  const [companiesName, setCompaniesName] = useState<any>([])
  const [companyData, setCompanyData] = useState<any>([])


  useEffect(() => {
    const companiesName = axios.get('http://localhost:3001/api/companies')
    const companyData1 = axios.get('http://localhost:3001/api/performance/countries')
    // const companyData2 = axios.get('http://localhost:3001/api/performance/countries')
    axios.all([companiesName, companyData1])
      .then(([name, company1, company2]) => {
        setCompaniesName(name.data)
        setCompanyData(company1.data);
      })
  }, [])

  return (
    <div className="App">
      {companiesName.length && 
        companyData.length &&
      <Table tableConfig={tableColumns} tableData={companyData} companies={companiesName}/>
      }
    </div>
  );
}

export default App;
