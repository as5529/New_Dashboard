import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../features/dashboardSlice';

const AddWidgetModal = ({ categoryId, onClose, searchQuery }) => {
  const dispatch = useDispatch();
  const availableWidgets = useSelector(state => state.dashboard.availableWidgets);
  
  const [selectedWidget, setSelectedWidget] = useState('');
  const [activeTab, setActiveTab] = useState(categoryId || 'cspm-executive-dashboard');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  // Filter the available widgets based on the search query
  const filteredWidgets = useMemo(() => {
    if (!searchQuery) {
      return availableWidgets;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return availableWidgets.filter(widget =>
      widget.name.toLowerCase().includes(lowerCaseQuery)
    );
  }, [availableWidgets, searchQuery]);

  const handleAdd = () => {
    // Logic for adding a custom widget with a name and text
    if (newWidgetName && newWidgetText) {
      const newCustomWidget = {
        id: `${newWidgetName.toLowerCase().replace(/\s/g, '-')}-${Date.now()}`,
        name: newWidgetName,
        text: newWidgetText
      };
      const targetCategoryId = categoryId || activeTab;
      dispatch(addWidget({ categoryId: targetCategoryId, widget: newCustomWidget }));
      onClose();
      return;
    }

    // Logic for adding a predefined widget from the dropdown
    const widgetToAdd = filteredWidgets.find(w => w.id === selectedWidget);
    if (widgetToAdd) {
      const targetCategoryId = categoryId || activeTab;
      if (targetCategoryId) {
        const newWidgetInstance = { ...widgetToAdd, id: `${widgetToAdd.id}-${Date.now()}` };
        dispatch(addWidget({ categoryId: targetCategoryId, widget: newWidgetInstance }));
        onClose();
      } else {
        alert("Please select a category.");
      }
    }
  };

  const getTabStyle = (tabId) => ({
    background: tabId === activeTab ? '#e9ecef' : 'none',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#000'
  });

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <div style={modalHeaderStyle}>
          <h3>Add Widget</h3>
          <button onClick={onClose} style={closeButtonStyle}>&times;</button>
        </div>
        <div style={modalBodyStyle}>
          <h4>Personalise your dashboard by adding the following widget</h4>
          <div style={{ display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '15px' }}>
            <button style={getTabStyle('cspm-executive-dashboard')} onClick={() => setActiveTab('cspm-executive-dashboard')}>CSPM</button>
            <button style={getTabStyle('cwpp-dashboard')} onClick={() => setActiveTab('cwpp-dashboard')}>CWPP</button>
            <button style={getTabStyle('registry-scan')} onClick={() => setActiveTab('registry-scan')}>Registry Scan</button>
          </div>
          
          {/* Input fields for custom widget creation */}
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Enter Widget Name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              style={inputStyle}
            />
            <textarea
              placeholder="Enter Widget Text"
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
              style={{ ...inputStyle, height: '80px' }}
            />
          </div>
          
          {/* Dropdown for selecting predefined widgets */}
          <select 
            value={selectedWidget} 
            onChange={(e) => setSelectedWidget(e.target.value)} 
            style={selectStyle}>
            <option value="">-- Or Select a Widget --</option>
            {filteredWidgets.map(widget => (
              <option key={widget.id} value={widget.id}>
                {widget.name}
              </option>
            ))}
          </select>
        </div>
        <div style={modalFooterStyle}>
          <button onClick={onClose} style={cancelButtonStyle}>Cancel</button>
          <button onClick={handleAdd} disabled={(!selectedWidget && (!newWidgetName || !newWidgetText))}>Add</button>
        </div>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '20px',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

const modalBodyStyle = {
  marginBottom: '20px',
};

const selectStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '10px'
};

const modalFooterStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
};

const cancelButtonStyle = {
  backgroundColor: '#ccc',
  color: '#333',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default AddWidgetModal;