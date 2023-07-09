import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const ExportToExcel = ({ taskList, showCompleted }) => {
  const headers = [
    { label: "Task Name", key: "title" },
    { label: "Description", key: "description" },
    { label: "Status", key: "status" },
  ];

  const [exportData, setExportData] = useState([]);
  useEffect(() => {
    if (showCompleted)
      setExportData(
        [...taskList]
          .map((task) => {
            if (task.isCompleted)
              return {
                title: task.title,
                description: task.description,
                status: "Completed",
              };
          })
          .filter((val) => val !== undefined)
      );
    else
      setExportData(
        [...taskList].map((task) => {
          return {
            title: task.title,
            description: task.description,
            status: task.isCompleted ? "Completed" : "Pending",
          };
        })
      );
  }, [taskList, showCompleted]);

  const csvLink = {
    filename: "Tasks",
    headers: headers,
    data: exportData,
  };
  return (
    <CSVLink {...csvLink} className="btn btn-outline-success mb-2">
      {showCompleted ? <span>Export Completed</span> : <span>Export All</span>}
    </CSVLink>
  );
};

export default ExportToExcel;
