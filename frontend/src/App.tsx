import { useEffect, useState } from "react";

declare global {
  interface Window {
    _env_?: {
      VITE_API_URL?: string;
    };
  }
}

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const API_URL = window._env_?.VITE_API_URL;

    if (!API_URL) {
      setStatus("API URL not configured ❌");
      return;
    }

    fetch(`${API_URL}/api/health/`)
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

