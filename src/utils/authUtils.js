import debug from './debug';

export const loginWithEmailPassword = (loginFn, email, password) => {
  debug.log('Attempting login with:', email, password);
  
  try {
    // Validate inputs
    if (!email || !email.trim()) {
      return { success: false, message: "Email is required" };
    }
    
    if (!password || !password.trim()) {
      return { success: false, message: "Password is required" };
    }
    
    // Call the login function
    const result = loginFn(email, password);
    debug.log('Login result:', result);
    
    return result;
  } catch (error) {
    debug.error('Error in login process:', error);
    return { 
      success: false, 
      message: "An error occurred during login. Please try again.",
      error
    };
  }
};
