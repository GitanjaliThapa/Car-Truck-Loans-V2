import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';

const STATUSES = ['new', 'contacted', 'in-progress', 'approved', 'declined', 'closed'];

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function load() {
    setLoading(true);
    try {
      const data = await api.getLeads(filter);
      setLeads(data);
    } catch (err) {
      setError(err.message);
      if (err.message.includes('log in')) {
        localStorage.removeItem('ctl_admin_token');
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  async function handleStatusChange(id, status) {
    setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
    try {
      await api.updateLead(id, { status });
    } catch (err) {
      setError(err.message);
    }
  }

  function logout() {
    localStorage.removeItem('ctl_admin_token');
    navigate('/admin/login');
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-lift">
        <h1 className="font-display text-xl font-bold">Car Truck Loans — Applications</h1>
        <button onClick={logout} className="text-sm text-white/80 hover:text-blue-light transition-colors">
          Log out
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <select
            className="border border-navy/20 rounded-lg px-3 py-2 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <a
            href={api.exportUrl()}
            className="bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
          >
            Export CSV
          </a>
        </div>

        {error && <p className="text-red-700 mb-4">{error}</p>}
        {loading ? (
          <p className="text-slate">Loading applications…</p>
        ) : leads.length === 0 ? (
          <p className="text-slate">No applications yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-soft border border-navy/10">
            <table className="w-full text-sm">
              <thead className="bg-navy/5 text-left text-navy">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Credit</th>
                  <th className="px-4 py-3">Vehicle</th>
                  <th className="px-4 py-3">Income</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="border-t border-navy/10 hover:bg-blue/5 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('en-CA')}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{lead.firstName} {lead.lastName}</td>
                    <td className="px-4 py-3">
                      <div>{lead.email}</div>
                      <div className="text-slate">{lead.phone}</div>
                    </td>
                    <td className="px-4 py-3">{lead.city}</td>
                    <td className="px-4 py-3 capitalize">{lead.creditSituation.replace('-', ' ')}</td>
                    <td className="px-4 py-3 capitalize">{lead.vehicleType}</td>
                    <td className="px-4 py-3">${Number(lead.monthlyIncome).toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <select
                        className="border border-navy/20 rounded px-2 py-1 bg-white text-xs capitalize focus:border-blue outline-none"
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
