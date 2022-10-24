const paginate = (req) => {
  let limit = +req.query.limit || 8;
  let offset = +req.query.page || 0;
  limit = limit < 1 ? 8 : limit;
  offset = offset < 1 ? 0 : (offset - 1) * limit;
  return [limit, offset];
};
module.exports = {
  paginate,
};
