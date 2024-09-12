import React from 'react';
import TabsComponent from './components/TabsComponent';
import './App.css';

const tabs = [
  { title: 'Tab 1', content: 'This is the first tab and Now tap on right' },
  { title: 'Tab 2', content: 'This is the second tab and Now tap on right.' },
  { title: 'Tab 3', content: 'This is the third tab and Now go to first tab.' }
];

const App = () => {
  return (
    <div className="App">
      <h1>Welcome To Tabs</h1>
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default App;
