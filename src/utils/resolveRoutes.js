const resolveRoutes = (route) => {
    if (route.length <= 10) {
      let validRoute = route === '#specialty' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
export default resolveRoutes;