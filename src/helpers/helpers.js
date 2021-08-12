export const buildQueryParams = (data) => {
  return Object.entries(data)
    .map(([key, value]) => {
      let fianlValue = value;
      if (Array.isArray(value)) {
        fianlValue = value.join(',');
      }
      return `${key}=${encodeURI(fianlValue)}`;
    })
    .join('&');
};
