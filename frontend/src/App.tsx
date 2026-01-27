import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health/`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend not reachable ❌"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      <h1>React + Django DevOps Project</h1>
      <p><strong>Backend status:</strong> {status}</p>
    </div>
  );
}

export default App;

