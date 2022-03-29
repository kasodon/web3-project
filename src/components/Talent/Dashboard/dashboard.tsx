// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './dashboard.scss'
import cardImg from './../../../assets/images/profile_pic.png'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="dashboard-header-actions">
                    <button>Switch Avatar</button>
                    <button>On-chain Profile</button>
                    <button className="create-avatar">Create Avatar</button>
                    <button className="delete-avatar">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.04557 6.95166H17.3789V17.785C17.3789 18.006 17.2911 18.218 17.1348 18.3743C16.9785 18.5305 16.7666 18.6183 16.5456 18.6183H4.87891C4.65789 18.6183 4.44593 18.5305 4.28965 18.3743C4.13337 18.218 4.04557 18.006 4.04557 17.785V6.95166ZM5.71224 8.61833V16.9517H15.7122V8.61833H5.71224ZM8.21224 10.285H9.87891V15.285H8.21224V10.285ZM11.5456 10.285H13.2122V15.285H11.5456V10.285ZM6.54557 4.45166V2.78499C6.54557 2.56398 6.63337 2.35202 6.78965 2.19574C6.94593 2.03946 7.15789 1.95166 7.37891 1.95166H14.0456C14.2666 1.95166 14.4785 2.03946 14.6348 2.19574C14.7911 2.35202 14.8789 2.56398 14.8789 2.78499V4.45166H19.0456V6.11833H2.37891V4.45166H6.54557ZM8.21224 3.61833V4.45166H13.2122V3.61833H8.21224Z"
                                fill="#D10000"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-body-profile">
                    <div className="profile-card">
                        <div className="background-cover"></div>
                        <div className="profile-card-image">
                            <img src={cardImg} alt="" />
                        </div>
                        <div className="card-content">
                            <h3>John Hopkins</h3>
                            <p className="userTag">@jackrich1234</p>
                            <a href="/ref">Default Profile</a>
                            <p className="verifyTag">
                                Verify - 723429134ixcfhru11`2457869034
                            </p>
                        </div>
                    </div>
                    <div className="avatar-card">
                        <div className="avatar-card-header">
                            <h3>Avatars</h3>
                        </div>
                        <div className="avatar-card-body">
                            <div className="avatar-card-body-item">
                                <img src="" alt="" />
                                <div className="text-box">
                                    <h4>Johnson DAO</h4>
                                    <p>Design</p>
                                </div>
                                <button className="delete-avatar">
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.04557 6.95166H17.3789V17.785C17.3789 18.006 17.2911 18.218 17.1348 18.3743C16.9785 18.5305 16.7666 18.6183 16.5456 18.6183H4.87891C4.65789 18.6183 4.44593 18.5305 4.28965 18.3743C4.13337 18.218 4.04557 18.006 4.04557 17.785V6.95166ZM5.71224 8.61833V16.9517H15.7122V8.61833H5.71224ZM8.21224 10.285H9.87891V15.285H8.21224V10.285ZM11.5456 10.285H13.2122V15.285H11.5456V10.285ZM6.54557 4.45166V2.78499C6.54557 2.56398 6.63337 2.35202 6.78965 2.19574C6.94593 2.03946 7.15789 1.95166 7.37891 1.95166H14.0456C14.2666 1.95166 14.4785 2.03946 14.6348 2.19574C14.7911 2.35202 14.8789 2.56398 14.8789 2.78499V4.45166H19.0456V6.11833H2.37891V4.45166H6.54557ZM8.21224 3.61833V4.45166H13.2122V3.61833H8.21224Z"
                                            fill="#D10000"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-body-data">
                    <div className="body-data-stats"></div>
                    <div className="body-data-arena"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
