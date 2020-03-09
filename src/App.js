import React, { useState } from 'react';
import styled from 'styled-components';
import { CompanyProfile, TabBar, View } from './components';
import companiesData from './companies';

const companyList = Object.values(companiesData);

function App() {
  const [selectedCompany, setSelectedCompany] = useState(companyList[0].id);

  return (
    <RootView>
      <TabBar
        items={companyList}
        onSelect={setSelectedCompany}
        selected={selectedCompany}
      />
      <CompanyProfile profile={companyList[selectedCompany]} />
    </RootView>
  );
}

export default App;

const RootView = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
