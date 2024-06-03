// src/components/ClientDashboard.js

import React from 'react';

function ClientDashboard() {
      const pricingPlans = [
            { id: 1, name: 'Basic Plan', price: '$10/month' },
            { id: 2, name: 'Pro Plan', price: '$20/month' },
      ];

      return (
            <div>
                  <h2>Client Dashboard</h2>
                  <div>
                        {pricingPlans.map((plan) => (
                              <div key={plan.id}>
                                    <h3>{plan.name}</h3>
                                    <p>{plan.price}</p>
                                    <button>Select</button>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

export default ClientDashboard;
