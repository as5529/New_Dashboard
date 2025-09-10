import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';
import ChartWidget from './ChartWidget';

const Widget = ({ widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ widgetId: widget.id }));
  };

  const renderContent = () => {
    if (widget.type === 'chart') {
      return (
        <div style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
          <ChartWidget data={widget.data} />
        </div>
      );
    }
    return <p>{widget.content}</p>;
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: '0' }}>{widget.title}</h3>
        {/* The remove button with a more prominent style */}
        <button onClick={handleRemove} style={{ background: 'none', border: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#999', cursor: 'pointer' }}>
          &times;
        </button>
      </div>
      <div style={{ marginTop: '15px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Widget;