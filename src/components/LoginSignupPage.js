// src/components/LoginSignupPage.js

import React, { useState } from 'react';

function LoginSignupPage() {
      const [isLogin, setIsLogin] = useState(true);

      const toggleForm = () => {
            setIsLogin(!isLogin);
      };

      return (
            <div>
                  {isLogin ? (
                        <div>
                              <h2>Login</h2>
                              <form>
                                    <input type="email" placeholder="Email" required />
                                    <input type="password" placeholder="Password" required />
                                    <button type="submit">Login</button>
                                    <button>Google Login</button>
                              </form>
                              <p onClick={toggleForm}>Don't have an account? Sign Up</p>
                        </div>
                  ) : (
                        <div>
                              <h2>Sign Up</h2>
                              <form>
                                    <input type="text" placeholder="Name" required />
                                    <input type="email" placeholder="Email" required />
                                    <input type="password" placeholder="Password" required />
                                    <select>
                                          <option value="admin">Admin</option>
                                          <option value="client">Client</option>
                                    </select>
                                    <button type="submit">Sign Up</button>
                                    <button>Google Sign Up</button>
                              </form>
                              <p onClick={toggleForm}>Already have an account? Login</p>
                        </div>
                  )}
                  <a href="/forgot-password">Forgot Password?</a>
            </div>
      );
}

export default LoginSignupPage;
