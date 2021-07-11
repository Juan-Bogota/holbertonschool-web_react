export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let res = null;
  isIndex
    ? (res = 'Holberton School')
    : (res = 'Holberton School main dashboard');
  return res;
};
