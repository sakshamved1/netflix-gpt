const checkValidData = (email, password, name) => {
  // Improved email regex
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password regex requiring at least 8 characters, one letter, one number, and one special character
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
    password
  );


  const isValidName = /^[A-Za-z\s'-]+$/.test(name);


  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password must be at least 8 characters long, include at least one letter, one number, and one special character.";

  // if(!isValidName) return "Name is Invalid";

  return null;
};

export default checkValidData;
