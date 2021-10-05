// pagination?page=1&limit=5
function paginationHelper(arrayInput = [], req) {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);


  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const objectresults = {};

  if (endIndex < arrayInput.length) {
    objectresults.next = {
      page: page + 1,
      limit: limit
    }
  }
  if (startIndex > 0) {
    objectresults.previous = {
      page: page - 1,
      limit: limit
    }
  }

  objectresults.data = arrayInput.slice(startIndex, endIndex);

  return objectresults;
}

module.exports = paginationHelper;