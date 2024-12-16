import React from 'react'
import PriceOption from '../PriceOption/PriceOption';

function PriceOptions() {
    const plans = [
        {
          id: 1,
          name: "Free Plan",
          price: 0,
          features: [
            "Basic Support via email with a 48-hour response time",
            "Access to 1 active project with limited functionality",
            "Join the community forum for tips and advice",
          ],
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 19.99,
          features: [
            "Priority Support via email with a 24-hour response time",
            "Access up to 5 active projects with additional customization options",
            "Customizable project templates to match your needs",
          ],
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 49.99,
          features: [
            "Dedicated Support via email and chat with a 1-hour response time",
            "Manage unlimited projects with advanced tools and analytics",
            "Access to exclusive advanced features such as automation and API integrations",
          ],
        },
      ];
      return (
        <div className="p-6 bg-blue-950 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-50">Our Pricing Plans</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {plans.map((plan) => (
                    <PriceOption
                        key={plan.id}
                        name={plan.name}
                        price={plan.price}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
}
export default PriceOptions