import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import Papa from 'papaparse';

interface SalaryData {
  work_year: number;
  job_tittle: number;
  averageSalary: number;
}

interface JobCountPerYear {
  work_year: number;
  jobCount: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<SalaryData[]>([]);
  const [jobCountsPerYear, setJobCountsPerYear] = useState<JobCountPerYear[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('salaries.csv'); // Replace with your CSV path
      const csvData = await response.text();
      const parsedData = Papa.parse(csvData, { header: true }).data as SalaryData[]; // Type assertion for clarity
      setData(parsedData);

      // Calculate job counts per year
      const jobCounts = parsedData.reduce((acc: JobCountPerYear[], job_tittle: SalaryData) => {
        const year = job_tittle.work_year;
        const existingCount = acc.find((count) => count.work_year === year)?.jobCount || 0; // Account for existing years and default to 0
        acc.push({ work_year: year, jobCount: existingCount + job_tittle.job_tittle });
        return acc;
      }, [] as JobCountPerYear[]);

      setJobCountsPerYear(jobCounts);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>ML Engineer Salaries</h1>
      <DataTable data={jobCountsPerYear} /> {/* Pass jobCountsPerYear to DataTable */}
    </div>
  );
};

export default App;
