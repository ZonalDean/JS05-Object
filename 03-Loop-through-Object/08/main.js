const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * isActive changed to false
  user = {};
  console.log(user); // ** error assignment to constant variable