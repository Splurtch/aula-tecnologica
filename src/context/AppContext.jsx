import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [expandedSectionGroup, setExpandedSectionGroup] = useState('Base tecnologica');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAchievementsModal, setShowAchievementsModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClearSelection = () => setSelectedItem(null);

  const value = {
    activeTab, setActiveTab,
    selectedItem, setSelectedItem,
    isSectionMenuOpen, setIsSectionMenuOpen,
    expandedSectionGroup, setExpandedSectionGroup,
    isScrolled, setIsScrolled,
    showAchievementsModal, setShowAchievementsModal,
    searchQuery, setSearchQuery,
    handleClearSelection,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export function useSelection() {
  const { selectedItem, handleClearSelection } = useApp();
  return { selectedItem, clearSelection: handleClearSelection };
}