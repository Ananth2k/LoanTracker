import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className='footer-nav'>
        <div className='d-flex justify-content-between align-items-center p-3 bg-dark text-white '>
            <div>
                <button onClick={() => navigate('/')} className="btn home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M3.31836 9.83105L12.3184 2.83105L21.3184 9.83105V20.8311C21.3184 21.3615 21.1076 21.8702 20.7326 22.2453C20.3575 22.6203 19.8488 22.8311 19.3184 22.8311H5.31836C4.78793 22.8311 4.27922 22.6203 3.90415 22.2453C3.52907 21.8702 3.31836 21.3615 3.31836 20.8311V9.83105Z" stroke="white" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.31836 22.8311V12.8311H15.3184V22.8311"  fill="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>               
            </div>
            <div>
                <button className='btn profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M20.665 20.9941V18.9941C20.665 17.9333 20.2436 16.9159 19.4935 16.1657C18.7433 15.4156 17.7259 14.9941 16.665 14.9941H8.66504C7.60417 14.9941 6.58676 15.4156 5.83661 16.1657C5.08647 16.9159 4.66504 17.9333 4.66504 18.9941V20.9941" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.665 10.9941C14.8742 10.9941 16.665 9.20328 16.665 6.99414C16.665 4.785 14.8742 2.99414 12.665 2.99414C10.4559 2.99414 8.66504 4.785 8.66504 6.99414C8.66504 9.20328 10.4559 10.9941 12.665 10.9941Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>               
            </div>
        </div>
    </div>
  )
}

export default Footer