import React, { useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Browsers = () => {
    const navigate = useNavigate();

    const goTo = (button) => {
        if (button === 1) {
            navigate('/apps/1');
        } else if (button === 2) {
            navigate('/apps/2');
        }
    };

    return (
        <>
        <div className='AppBanner'>
            <div>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
                <div className="card">
                    {/* Pass a function reference to onClick */}
                    <button onClick={() => goTo(1)}>
                        Google Chrome
                    </button>
                </div>
            </div>
            <div>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png" alt="" />
                <div className="card">
                    {/* Pass a function reference to onClick */}
                    <button onClick={() => goTo(2)}>
                        Brave
                    </button>
                </div>
            </div>
        </div>
        <div className="card">
            {/* Pass a function reference to onClick */}
            <button>
                <Link to='/'>Go Back</Link>
            </button>
        </div>
        </>
    );
};

export default Browsers;
