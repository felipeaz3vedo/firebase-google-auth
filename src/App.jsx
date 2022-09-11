import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Account } from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import { Protected } from './components/Protected';

export function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
