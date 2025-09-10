import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';

const WidgetCard = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div style={widgetCardStyle}>
      <div style={widgetHeaderStyle}>
        <h3 style={widgetTitleStyle}>{widget.name || widget.title}</h3>
        <button onClick={handleRemove} style={removeButtonStyle}>&times;</button>
      </div>
      <div style={widgetContentStyle}>
        {widget.chartComponent ? (
          <widget.chartComponent />
        ) : (
          <p style={widgetTextStyle}>{widget.text || widget.content}</p>
        )}
      </div>
    </div>
  );
};

const widgetCardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
};

const widgetHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
};

const widgetTitleStyle = {
  margin: 0,
  fontSize: '1.2rem',
  color: '#333',
};

const removeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#999',
};

const widgetContentStyle = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const widgetTextStyle = {
  fontSize: '1rem',
  color: '#555',
};

export default WidgetCard;