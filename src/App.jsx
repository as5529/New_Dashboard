import React, { useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardContent from './components/DashboardContent';
import AddWidgetModal from './components/AddWidgetModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpenModal = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setSearchQuery(''); // Reset search query when modal is closed
  };

  return (
    <div className="dashboard-page">
      <DashboardHeader onAddWidget={() => handleOpenModal(null)} onSearch={setSearchQuery} />
      <DashboardContent onAddWidget={handleOpenModal} />
      {isModalOpen && (
        <AddWidgetModal
          categoryId={selectedCategory}
          onClose={handleCloseModal}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
}

export default App;