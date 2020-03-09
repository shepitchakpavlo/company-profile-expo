import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../Image';
import View from '../View';
import Text from '../Text';

const NewsItem = ({ item, className }) => {
  const dateToDisplay = new Date(item.publishedAt).toLocaleString();

  return (
    <RootView className={className}>
      <ThumbnailImage src={item.urlToImage} />
      <ColumnView>
        <Link href={item.url} target="_blank">
          {item.title}
        </Link>
        <RowView>
          <AuthorText>{item.author}</AuthorText>
          <DateText>{dateToDisplay}</DateText>
        </RowView>
      </ColumnView>
    </RootView>
  );
};

export default NewsItem;

const ST = PropTypes.string.isRequired;

NewsItem.propTypes = {
  item: PropTypes.shape({
    title: ST,
    author: PropTypes.string,
    url: ST,
    urlToImage: ST,
    publishedAt: ST,
  }),
  className: PropTypes.string,
};

const RootView = styled(View)`
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 12px;
`;

const ThumbnailImage = styled(Image)`
  width: 85px;
  object-fit: contain;
  margin-right: 12px;
`;

const RowView = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ColumnView = styled(View)`
  flex-direction: column;
`;

const Link = styled.a`
  font-size: 12px;
  margin-bottom: 5px;
`;

const AuthorText = styled(Text)`
  font-size: 10px;
  font-style: italic;
`;

const DateText = styled(Text)`
  font-size: 10px;
  font-style: oblique;
`;
