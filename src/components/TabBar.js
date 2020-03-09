import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import View from './View';

const TabBar = ({ items, onSelect, selected }) => {
  const renderItem = ({ name, id }) => (
    <TabItem isSelected={selected === id} onClick={() => onSelect(id)} key={id}>
      {name}
    </TabItem>
  );

  return <RootView>{items.map(renderItem)}</RootView>;
};

export default TabBar;

TabBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

const RootView = styled(View)`
  height: 50px;
  align-self: stretch;flex-direction: row;
`;

const decideBackgroundColor = props => (props.isSelected ? '#ccc' : '#f1f1f1');

const TabItem = styled(Text)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: ${decideBackgroundColor};
  &:hover {
    background-color: #ddd;
  }
`;
