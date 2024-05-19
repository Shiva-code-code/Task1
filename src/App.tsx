import { useEffect, useState } from 'react';
import './App.css'
import DataTable from './DataTable';

let one24 = 0;
let one23 = 0;
let one22 = 0;
let one21 = 0;


function App() {
  const [data, setData] = useState<any[]>([]) 
  const { fetchCsvData } = DataTable();

  useEffect(() => {
    fetchCsvData('./src/hooks/salaries.csv', setData)
  }, [])
  console.log(data);
  return (
    <>
    <h1>Main Table</h1>
    <div className='card'>
    <div className="App">
      <table className='table'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Number of jobs</th>
            <th>Average salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {data.map(work => (
                <p>{work["work_year"]}</p>
              ))}
            </th>
            <th>
              {data.map(job => (
                <p>{job["job_title"]}</p>
              ))}
            </th>
            <th>
              {data.map(sal => (
                <p>{sal["salary"]}</p>
              ))}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </>
    
  )
}
export default App;