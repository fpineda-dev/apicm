const paginate = (req) => {
  let limit = +req.query.limit || 2;
  let offset = +req.query.page || 0;
  limit = limit < 1 ? 2 : limit;
  offset = offset < 1 ? 0 : (offset - 1) * limit;
  return [limit, offset];
};
module.exports = {
  paginate,
};
