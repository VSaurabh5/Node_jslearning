const getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to airbnb',
    currentPage: 'add-home',
 });
};
const postAddHome =(req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
};


exports.getAddHome = getAddHome;
exports.postAddHome=postAddHome;