const getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to airbnb',
    currentPage: 'add-home',
 });
};
exports.getAddHome = getAddHome;