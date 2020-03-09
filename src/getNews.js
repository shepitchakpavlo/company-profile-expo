const apiKey = '1ce4d2efa1394b6091e5773abb201d85';

const getUrl = q =>
  `http://newsapi.org/v2/top-headlines?q=${q}&sortBy=publishedAt&apiKey=${apiKey}`;

export default async company => {
  const url = getUrl(company);
  const response = await fetch(url);
  const body = await response.json();

  return body.articles;
};
