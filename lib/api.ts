export const settingsApi = {
  get: async () => {
    const res = await fetch('/api/settings');
    return res.json();
  },
  
  update: async (data: { openToWork: boolean; headerText: { fa: string; en: string } }) => {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};

export const analyticsApi = {
  get: async () => {
    const res = await fetch('/api/analytics');
    return res.json();
  }
};
