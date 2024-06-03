// src/components/AdminDashboard.js

import React from 'react';

function AdminDashboard() {
      const salesRequests = [
            { id: 1, clientName: 'Client A', details: 'Request A', status: 'Pending' },
            { id: 2, clientName: 'Client B', details: 'Request B', status: 'Completed' },
      ];

      return (
            <div>
                  <h2>Admin Dashboard</h2>
                  <table>
                        <thead>
                              <tr>
                                    <th>Client Name</th>
                                    <th>Request Details</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                              </tr>
                        </thead>
                        <tbody>
                              {salesRequests.map((request) => (
                                    <tr key={request.id}>
                                          <td>{request.clientName}</td>
                                          <td>{request.details}</td>
                                          <td>{request.status}</td>
                                          <td>
                                                <button>View</button>
                                                <button>Update</button>
                                          </td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
}

export default AdminDashboard;
