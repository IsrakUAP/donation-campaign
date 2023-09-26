import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ChartPie = ({ cardBgColor }) => {
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('donation');
        console.log('localStorageData:', localStorageData);
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            console.log('Parsed Data:', parsedData);
            setDonation(parsedData);
        }
    }, []);

    const totalDonationsMade = donation.length;
    const totalDonations = 12;

    const yourDonationPercentage = (totalDonationsMade / totalDonations) * 100;

    const colors = ['#00C49F', '#FF444A'];

    const data = [
        { name: 'Your Donations', value: yourDonationPercentage },
        { name: 'Total Donations', value: 100 - yourDonationPercentage },
    ];

    return (
        <div className='flex flex-col items-center' style={{ height: '100vh', weight: '100%' }}>
            <PieChart width={1000} height={700}>
                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={250}
                    label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            <div className='mt-4'>
            </div>
        </div>
    );
};

export default ChartPie;
