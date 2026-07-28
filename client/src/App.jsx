import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Apply from './pages/Apply.jsx';
import ThankYou from './pages/ThankYou.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function isAuthed() {
  return Boolean(localStorage.getItem('ctl_admin_token'));
}

function RequireAuth({ children }) {
  return isAuthed() ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
