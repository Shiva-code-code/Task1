import React from 'react';

interface JobCountPerYear {
  work_year: number;
  jobCount: number;
}

interface DataTableProps {
  data: JobCountPerYear[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Year</th><br></br>
            <th>Number of Jobs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => (
            <tr key={job.work_year}>
              <td>{job.work_year}</td>
              <td>{job.jobCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
