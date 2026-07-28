import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await api.login({ email, password });
      localStorage.setItem('ctl_admin_token', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue/20 rounded-full blur-3xl animate-drift" />
      <div className="relative bg-white rounded-2xl shadow-lift p-10 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-navy mb-1">Car Truck Loans</h1>
        <p className="text-slate text-sm mb-8">Team login</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="block text-sm font-medium text-navy mb-1.5">Email</span>
            <input
              type="email"
              required
              className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-shadow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-navy mb-1.5">Password</span>
            <input
              type="password"
              required
              className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-shadow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
