import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import View from '../View';
import Text from '../Text';
import NewsItem from './NewsItem';
import useNews from './useNews';

const NewsSection = ({ companyName, className }) => {
  const { news, isLoading, isError } = useNews(companyName);
  const renderContent = () => {
    if (isError) {
      return <ErrorText>Loading error</ErrorText>;
    }
    if (isLoading) {
      return <LoaderText>Loading...</LoaderText>;
    }
    if (!news || news.length === 0) {
      return <NoNewsText>No news for this company</NoNewsText>;
    }

    return news.map(item => <NewsItemStyled item={item} key={item.url} />);
  };

  return (
    <RootView className={className}>
      <HeaderText>News</HeaderText>
      {renderContent()}
    </RootView>
  );
};

export default NewsSection;

NewsItem.propTypes = {
  className: PropTypes.string,
  companyName: PropTypes.string.isRequired,
};

const RootView = styled(View)`
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 12px;
`;

const ErrorText = styled(Text)`
  color: red;
`;

const LoaderText = styled(Text)`
  color: green;
`;

const NoNewsText = styled(Text)`
  color: blue;
`;

const HeaderText = styled(Text)`
  font-size: 16px;
  text-decoration: underline;
`;

const NewsItemStyled = styled(NewsItem)`
  margin-top: 12px;
`;
