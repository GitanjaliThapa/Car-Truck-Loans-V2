const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

async function request(path, options = {}) {
  const token = localStorage.getItem('ctl_admin_token');
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    }
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.');
  }
  return data;
}

export const api = {
  submitLead: (payload) => request('/api/leads', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  getLeads: (status) => request(`/api/leads${status ? `?status=${status}` : ''}`),
  updateLead: (id, payload) => request(`/api/leads/${id}`, { method: 'PATCH', body: JSON.stringify(payload) }),
  exportUrl: () => `${API_URL}/api/leads/export.csv?token=${localStorage.getItem('ctl_admin_token') || ''}`
};
