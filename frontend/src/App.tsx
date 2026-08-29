import React from 'react';
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <h1>NetOps Dashboard</h1>
        <nav>
          <a href="#">Dashboard</a> | 
          <a href="#">Devices</a> | 
          <a href="#">IPAM</a> | 
          <a href="#">Alerts</a>
        </nav>
      </header>
      <main style={{ marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>Overview</h2>
          <p>Total Devices: 42</p>
          <p>Active Alerts: 3</p>
        </div>
      </main>
    </div>
  );
}
export default App;