import Router from 'next/router';
import React, { useEffect } from 'react';

function AdminPanel() {
  useEffect(() => {
    !localStorage.getItem('token') && Router.push('/login');
  });
  return <div>AdminPanel</div>;
}

export default AdminPanel;
