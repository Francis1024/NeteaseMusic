import router from './router';

router.beforeEach(async(to, from, next) => {
  // set page title
  next();
});

router.afterEach(() => {
  // finish progress bar

});
