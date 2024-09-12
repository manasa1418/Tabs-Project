    import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsComponent = ({ tabs }) => {
  return (
    <div className="tabs-container">
      <Tabs>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
