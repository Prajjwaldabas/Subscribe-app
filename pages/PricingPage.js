import React, { useState } from 'react';

const PricingPage = () => {

    const [yearly, setYearly] = useState(false);
  const plansData = [
    {
      title: 'Price',
      details: ['100', '200', '500', '700'],
    },
    {
      title: 'Video Quality',
      details: ['Good', 'Good', 'Better', 'Best'],
    },
    {
      title: 'Resolution',
      details: ['480p', '480p', '1080p', '4k+HDR'],
    },
    {
      title: 'Devices you can use to watch',
      details: ['phone', 'phone', 'phone', 'phone'],
    },
  ];

  const toggleYearly = () => {
    setYearly(!yearly);
  };

  return (
    <div className='flex jcc aic fd-col'>

      <h1 style={{ fontSize: "30px", fontWeight: "600", padding: "20px" }}>Choose the right plan for you.</h1>

      <div className="flex flex-col w-70">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
              <th scope="col" className="p-20 bg-darkBlue flex jcsa aic col-white g-10 br-50">

            <button className={` ${yearly ? '' : 'rounBtn'}`} onClick={toggleYearly}>
                        Monthly
                      </button>
                      <button className={` ${yearly ? 'rounBtn' : ''}`} onClick={toggleYearly}>
                        Yearly
                      </button>
              </th>
              <th scope="col" className=" th-box bg-darkBlue">Mobile</th>
              <th scope="col" className=" th-box bg-darkBlue">Basic</th>
              <th scope="col" className=" th-box bg-darkBlue">Standard</th>
              <th scope="col" className=" th-box bg-darkBlue">Premium</th>
            </tr>
                </thead>
                <tbody>
                  {plansData.map((plan, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{plan.title}</td>
                      {plan.details.map((detail, detailIndex) => (
                        <td key={detailIndex} className="whitespace-nowrap px-6 py-4">
       {plan.title === 'Price' && yearly ? (parseInt(detail) * 10).toString() : detail}
                      </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
