import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Home from './components/Home';
import './App.css';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#007fd4', // Primary color
        borderRadius: 4, // Border radius for components
      },
      components: {
        Select: {
          selectorBg: '#3c3c3c',
          optionActiveBg: '#007fd466',
          colorBorder: '#007fd466',
          colorText: '#cccccc',
          colorTextPlaceholder: '#989898',
        },
        Input: {
          colorBgContainer: '#3c3c3c',
          addonBg: '#252526',
          colorText: '#cccccc',
          colorTextPlaceholder: '#989898',
        },
        Button: {
          borderColorDisabled: '#007fd466',
        },
      },
    }}
  >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add additional routes here */}
      </Routes>
    </Router>
  </ConfigProvider>
);

export default App;
