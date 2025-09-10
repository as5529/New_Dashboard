import React from 'react';
import { useSelector } from 'react-redux';
import WidgetCard from './WidgetCard';

const DashboardContent = ({ onAddWidget }) => {
  const { categories } = useSelector(state => state.dashboard);

  return (
    <div style={dashboardContentStyle}>
      {Object.values(categories).map(category => (
        <section key={category.id} style={categorySectionStyle}>
          <div style={categoryHeaderStyle}>
            <h2>{category.name}</h2>
            <button onClick={() => onAddWidget(category.id)} style={addWidgetButtonStyle}>
              + Add Widget
            </button>
          </div>
          <div style={widgetContainerStyle}>
            {category.widgets.length > 0 ? (
              category.widgets.map(widget => (
                <WidgetCard 
                  key={widget.id} 
                  widget={widget} 
                  categoryId={category.id}
                />
              ))
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                No widgets in this category.
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

const dashboardContentStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
};

const categorySectionStyle = {
  marginBottom: '30px',
};

const categoryHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '20px',
};

const addWidgetButtonStyle = {
  padding: '6px 12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  background: '#fff',
  color: '#333',
};

const widgetContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
};

export default DashboardContent;