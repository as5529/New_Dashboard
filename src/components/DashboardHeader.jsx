import React from 'react';

const DashboardHeader = ({ onAddWidget, onSearch }) => {
  return (
    <header style={{ padding: '16px 20px', backgroundColor: '#F8F9FA', borderBottom: '1px solid #E0E0E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>CNAPP Dashboard</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search anything..."
          onChange={(e) => onSearch(e.target.value)}
          style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #CCCCCC', backgroundColor: '#F8F9FA', fontSize: '14px', width: '250px' }}
        />
        <button 
          onClick={onAddWidget} 
          style={{ 
            padding: '8px 16px', 
            border: '1px solid #CCCCCC',
            borderRadius: '4px',
            cursor: 'pointer', 
            background: '#FFFFFF',
            color: '#333',
            display: 'flex', 
            alignItems: 'center', 
            gap: '5px' 
          }}>
          <span>Add Widget</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+</span>
        </button>
        <select style={{ padding: '8px 10px', borderRadius: '4px', border: '1px solid #E0E0E0', backgroundColor: '#fff', fontSize: '14px' }}>
          <option>Last 2 days</option>
        </select>
      </div>
    </header>
  );
};

export default DashboardHeader;