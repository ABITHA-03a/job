import React from "react";
import "./App.css";
import Jobs from "./Jobs";
import Typography from '@mui/material/Typography'; // Importing Typography

// Function to fetch jobs from the backend
async function fetchJobs(updateCb) {
  try {
    const res = await fetch("http://localhost:3001/jobs");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await res.json();
    updateCb(json);
    console.log({ json });
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }
}

function App() {
  const [jobList, updateJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // New loading state

  // Fetch jobs on initial render
  React.useEffect(() => {
    async function getJobs() {
      await fetchJobs(updateJobs);
      setLoading(false); // Set loading to false after fetching is complete
    }
    getJobs();
  }, []);

  return (
    <div className="App">
      <Typography variant="h2" align="center" gutterBottom>
        Job Portal
      </Typography>
      {loading ? (
        <Typography variant="body1" align="center">
          Loading jobs...
        </Typography> // Display loading message while fetching
      ) : (
        <Jobs jobs={jobList} /> // Pass jobList to the Jobs component once data is fetched
      )}
    </div>
  );
}

export default App;
