import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Apps = () => {
    const { id } = useParams();
    const [browserName, setBrowserName] = useState('');

    useEffect(() => {
        const idNumber = parseInt(id);

        if (idNumber === 1) {
            setBrowserName('Google Chrome');
        } else if (idNumber === 2) {
            setBrowserName('Brave');
        }
    }, [id]);

    return (
        <>
            <h2>You Clicked {browserName}</h2>
            <div className="card">
                <button>
                    <Link to="/browsers">Go Back</Link>
                </button>
            </div>
        </>
    );
};

export default Apps;
