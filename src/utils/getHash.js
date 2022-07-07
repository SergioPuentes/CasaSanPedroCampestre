const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('*')[0] || '/';
export default getHash;