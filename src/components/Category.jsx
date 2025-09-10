import React from 'react';
import Widget from './Widget';

const Category = ({ category, onAddWidget }) => {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>{category.name}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <div 
          style={{ border: '1px dashed #ccc', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#fff' }} 
          onClick={() => onAddWidget(category.id)}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', color: '#666' }}>+</span>
            <p style={{ margin: '0', color: '#666' }}>Add Widget</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;