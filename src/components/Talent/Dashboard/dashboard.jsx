import * as React from 'react'
// import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'
import Settings from '@mui/icons-material/Settings'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import './dashboard.scss'
import cardImg from './../../../assets/images/profile_pic.png'
import certImg from './../../../assets/images/cert.svg'

function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="dashboard-header-actions">
                    {/* <button>Switch Avatar</button> */}
                    <button className="create-profile">On-chain Profile</button>
                    {/* <button className="create-avatar">Create Avatar</button> */}
                    {/* <button className="delete-avatar">
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
                    </button> */}
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
                            <div className="tool-tip">
                                <Tooltip
                                    title="Create New Avatar"
                                    placement="top-start"
                                    arrow
                                >
                                    <IconButton>
                                        <AddCircleOutlinedIcon
                                            sx={{ fontSize: 32 }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="avatar-card-body">
                            <div className="avatar-card-body-item">
                                <img src={cardImg} alt="" />
                                <div className="text-box">
                                    <h4>Johnson DAO</h4>
                                    <p>Design</p>
                                </div>
                                <div className="">
                                    <Tooltip
                                        title="Configure Avatar"
                                        placement="top-start"
                                        arrow
                                    >
                                        <IconButton
                                            onClick={handleClick}
                                            aria-controls={
                                                open
                                                    ? 'account-menu'
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                open ? 'true' : undefined
                                            }
                                        >
                                            <MoreVertIcon
                                                sx={{ fontSize: 34 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="avatar-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform:
                                                    'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{
                                        horizontal: 'right',
                                        vertical: 'top',
                                    }}
                                    anchorOrigin={{
                                        horizontal: 'right',
                                        vertical: 'bottom',
                                    }}
                                >
                                    <MenuItem sx={{ padding: 2 }}>
                                        <Settings sx={{ mr: 1 }} /> Configure
                                        Avatar
                                    </MenuItem>
                                    <MenuItem sx={{ padding: 2 }}>
                                        <DeleteIcon sx={{ mr: 1 }} /> Delete
                                        Avatar
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div className="avatar-card-body-item">
                                <img src={cardImg} alt="" />
                                <div className="text-box">
                                    <h4>Johnson DAO</h4>
                                    <p>Design</p>
                                </div>
                                <div className="">
                                    <Tooltip
                                        title="Configure Avatar"
                                        placement="top-start"
                                        arrow
                                    >
                                        <IconButton
                                            onClick={handleClick}
                                            aria-controls={
                                                open
                                                    ? 'account-menu'
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                open ? 'true' : undefined
                                            }
                                        >
                                            <MoreVertIcon
                                                sx={{ fontSize: 34 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="avatar-card-body-item">
                                <img src={cardImg} alt="" />
                                <div className="text-box">
                                    <h4>Johnson DAO</h4>
                                    <p>Design</p>
                                </div>
                                <div className="">
                                    <Tooltip
                                        title="Configure Avatar"
                                        placement="top-start"
                                        arrow
                                    >
                                        <IconButton
                                            onClick={handleClick}
                                            aria-controls={
                                                open
                                                    ? 'account-menu'
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                open ? 'true' : undefined
                                            }
                                        >
                                            <MoreVertIcon
                                                sx={{ fontSize: 34 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="avatar-card-body-item">
                                <img src={cardImg} alt="" />
                                <div className="text-box">
                                    <h4>Johnson DAO</h4>
                                    <p>Design</p>
                                </div>
                                <div className="">
                                    <Tooltip
                                        title="Configure Avatar"
                                        placement="top-start"
                                        arrow
                                    >
                                        <IconButton
                                            onClick={handleClick}
                                            aria-controls={
                                                open
                                                    ? 'account-menu'
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                open ? 'true' : undefined
                                            }
                                        >
                                            <MoreVertIcon
                                                sx={{ fontSize: 34 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-body-data">
                    <div className="body-data-stats">
                        <div className="box-text">
                            <div className="icon black">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M39.863 45.273V2.614C39.9098 2.08135 39.7458 1.55159 39.4062 1.13855C39.0667 0.725504 38.5786 0.462126 38.047 0.404999H9.95299C9.42135 0.462126 8.93332 0.725504 8.59376 1.13855C8.2542 1.55159 8.0902 2.08135 8.13699 2.614V45.273C8.13699 47.249 10.108 48.231 11.248 46.822L22.688 32.678C22.8354 32.4668 23.0317 32.2942 23.2601 32.1751C23.4886 32.056 23.7424 31.9938 24 31.9938C24.2576 31.9938 24.5114 32.056 24.7398 32.1751C24.9683 32.2942 25.1645 32.4668 25.312 32.678L36.752 46.822C37.892 48.231 39.863 47.249 39.863 45.273Z"
                                        fill="#4b4b4b"
                                    />
                                </svg>
                            </div>
                            <p className="text-header">Certifications</p>
                            <p className="text-num">50</p>
                        </div>
                        <div className="box-text">
                            <div className="icon black">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.217 5.967H2.42602C2.05321 5.96726 1.69574 6.11548 1.43212 6.3791C1.1685 6.64272 1.02028 7.00019 1.02002 7.373V41.165L4.13102 40.42C9.63995 39.102 15.3821 39.102 20.891 40.42L23.342 41.056V15.643C23.452 6.536 19.621 5.967 14.217 5.967Z"
                                        fill="#4b4b4b"
                                    />
                                    <path
                                        d="M33.783 5.967H45.574C45.9468 5.96726 46.3043 6.11548 46.5679 6.3791C46.8315 6.64272 46.9797 7.00019 46.98 7.373V41.165L43.869 40.42C38.3601 39.102 32.6179 39.102 27.109 40.42L24.658 41.056V15.643C24.548 6.536 28.379 5.967 33.783 5.967Z"
                                        fill="#4b4b4b"
                                    />
                                </svg>
                            </div>
                            <p className="text-header">Learning</p>
                            <p className="text-num">10</p>
                        </div>
                        <div className="box-text">
                            <div className="icon black">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M40.037 6.68601C38.2657 7.73692 36.1951 8.16883 34.1513 7.91375C32.1076 7.65866 30.2067 6.73106 28.748 5.27701L25.164 1.61201C24.8128 1.42156 24.4196 1.32181 24.02 1.32181C23.6205 1.32181 23.2272 1.42156 22.876 1.61201L19.246 5.32501C17.8013 6.76405 15.9182 7.68052 13.8944 7.92953C11.8705 8.17855 9.82144 7.74591 8.07101 6.70001C7.73057 6.5015 7.34469 6.39413 6.95064 6.38826C6.55659 6.38239 6.16769 6.47822 5.82148 6.66651C5.47528 6.85479 5.18347 7.12916 4.97423 7.46312C4.765 7.79708 4.64541 8.17934 4.62701 8.57301V13.835C4.58538 22.5907 7.61594 31.0836 13.191 37.835C16.291 41.561 21.052 46.525 24.355 46.525C27.658 46.525 31.811 41.561 34.911 37.835C40.4861 31.0836 43.5166 22.5907 43.475 13.835V8.56001C43.4562 8.16715 43.3367 7.78573 43.1278 7.45244C42.919 7.11915 42.6279 6.84521 42.2826 6.65698C41.9372 6.46874 41.5493 6.37253 41.156 6.37762C40.7627 6.3827 40.3774 6.4889 40.037 6.68601Z"
                                        fill="#4b4b4b"
                                    />
                                </svg>
                            </div>
                            <p className="text-header">Bounties</p>
                            <p className="text-num">20</p>
                        </div>
                        <div className="box-text">
                            <div className="icon black">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.73099 41.755V2.123C5.73099 1.99039 5.67832 1.86322 5.58455 1.76945C5.49078 1.67568 5.3636 1.623 5.23099 1.623H1.33099C1.19839 1.623 1.07121 1.67568 0.97744 1.76945C0.883672 1.86322 0.830994 1.99039 0.830994 2.123V45.769C0.830994 45.9016 0.883672 46.0288 0.97744 46.1226C1.07121 46.2163 1.19839 46.269 1.33099 46.269H46.782C46.9146 46.269 47.0418 46.2163 47.1355 46.1226C47.2293 46.0288 47.282 45.9016 47.282 45.769V42.755C47.282 42.6224 47.2293 42.4952 47.1355 42.4014C47.0418 42.3077 46.9146 42.255 46.782 42.255H6.23099C6.09839 42.255 5.97121 42.2023 5.87744 42.1086C5.78367 42.0148 5.73099 41.8876 5.73099 41.755Z"
                                        fill="#4b4b4b"
                                    />
                                    <path
                                        d="M9.40003 40.756L5.84003 38.997L14.198 22.104L22.41 28.655L28.843 14.893L36.252 19.617L43.625 5.149L47.166 6.95L37.804 25.319L30.524 20.675L23.874 34.906L15.573 28.282L9.40003 40.756Z"
                                        fill="#4b4b4b"
                                    />
                                </svg>
                            </div>
                            <p className="text-header">Token staked</p>
                            <p className="text-num">200</p>
                        </div>
                        <div className="box-text">
                            <div className="icon black">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.692 25.714C27.7004 25.714 27.7086 25.7123 27.7163 25.7091C27.724 25.7059 27.731 25.7011 27.7369 25.6952C27.7428 25.6892 27.7474 25.6822 27.7505 25.6744C27.7536 25.6666 27.7551 25.6583 27.755 25.65V5.94699L20.308 5.88199L20.245 25.65L27.692 25.714Z"
                                        fill="#4b4b4b"
                                    />
                                    <path
                                        d="M45.166 5.88199H28.635C28.759 6.0581 28.8285 6.26672 28.835 6.48199V25.652C28.8347 25.9539 28.7146 26.2433 28.501 26.4567C28.2875 26.6701 27.9979 26.79 27.696 26.79H20.308C20.006 26.79 19.7163 26.6702 19.5026 26.4568C19.2889 26.2434 19.1685 25.954 19.168 25.652V6.48299C19.175 6.26782 19.2445 6.05934 19.368 5.88299H2.83401C2.5919 5.88286 2.35213 5.93043 2.12841 6.02299C1.90469 6.11555 1.70141 6.25129 1.53016 6.42244C1.35892 6.59359 1.22307 6.7968 1.13039 7.02047C1.03771 7.24414 0.990006 7.48388 0.990006 7.72599V40.274C0.989874 40.5162 1.03748 40.756 1.1301 40.9798C1.22273 41.2036 1.35855 41.4069 1.52981 41.5782C1.70107 41.7494 1.9044 41.8853 2.12818 41.9779C2.35197 42.0705 2.59181 42.1181 2.83401 42.118H45.166C45.4082 42.1181 45.648 42.0705 45.8718 41.9779C46.0956 41.8853 46.2989 41.7494 46.4702 41.5782C46.6415 41.4069 46.7773 41.2036 46.8699 40.9798C46.9625 40.756 47.0101 40.5162 47.01 40.274V7.72599C47.0101 7.48379 46.9625 7.24395 46.8699 7.02017C46.7773 6.79638 46.6415 6.59305 46.4702 6.42179C46.2989 6.25053 46.0956 6.11471 45.8718 6.02209C45.648 5.92946 45.4082 5.88186 45.166 5.88199V5.88199Z"
                                        fill="#4b4b4b"
                                    />
                                </svg>
                            </div>
                            <p className="text-header">Token earned</p>
                            <p className="text-num">1,000</p>
                        </div>
                    </div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                            >
                                <TabList
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label="Profile" value="1" />
                                    <Tab label="Learn to Earn" value="2" />
                                    <Tab label="Certificates" value="3" />
                                    <Tab label="Work to Earn" value="4" />
                                    <Tab label="NFTs" value="5" />
                                </TabList>
                            </Box>
                            <TabPanel className="body-data-arena" value="1">
                                <div className="socials">
                                    <div className="socials-item">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.4756 4.16259C10.9056 4.16249 10.3583 4.38618 9.95155 4.78551C9.54478 5.18484 9.31104 5.72791 9.30062 6.29784L9.27962 7.47909C9.27839 7.54251 9.26377 7.60496 9.23671 7.66233C9.20965 7.7197 9.17077 7.77071 9.12261 7.812C9.07445 7.85328 9.0181 7.88392 8.95727 7.90191C8.89644 7.91989 8.83249 7.92481 8.76963 7.91634L7.59888 7.75734C6.05838 7.54734 4.58238 6.83784 3.16638 5.65809C2.71788 8.14059 3.59388 9.86034 5.70363 11.1871L7.01388 12.0106C7.07613 12.0497 7.12785 12.1035 7.16451 12.1672C7.20117 12.231 7.22165 12.3027 7.22417 12.3762C7.22669 12.4497 7.21116 12.5227 7.17894 12.5888C7.14673 12.6549 7.09881 12.712 7.03938 12.7553L5.84538 13.6276C6.55562 13.6718 7.22987 13.6403 7.78937 13.5293C11.3279 12.8228 13.6806 10.1603 13.6806 5.76834C13.6806 5.40984 12.9216 4.16259 11.4756 4.16259ZM7.80062 6.27009C7.81372 5.54712 8.03979 4.84409 8.45054 4.249C8.8613 3.65392 9.43848 3.19323 10.1098 2.92461C10.7811 2.656 11.5168 2.5914 12.2247 2.7389C12.9326 2.8864 13.5812 3.23944 14.0894 3.75384C14.6226 3.75009 15.0764 3.88509 16.0911 3.27009C15.8399 4.50009 15.7161 5.03409 15.1806 5.76834C15.1806 11.4998 11.6579 14.2868 8.08337 15.0001C5.63238 15.4891 2.06837 14.6858 1.04688 13.6193C1.56738 13.5788 3.68237 13.3516 4.90488 12.4568C3.87063 11.7751 -0.246125 9.35259 2.45913 2.83959C3.72888 4.32234 5.01663 5.33184 6.32163 5.86734C7.19013 6.22359 7.40313 6.21609 7.80138 6.27084L7.80062 6.27009Z"
                                                fill="black"
                                            />
                                        </svg>
                                        <p>@jadensmithjunior</p>
                                    </div>
                                    <div className="socials-item">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM15 5.4285L9.054 10.7535L3 5.412V14.25H15V5.4285ZM3.38325 3.75L9.04575 8.7465L14.6265 3.75H3.38325Z"
                                                fill="black"
                                            />
                                        </svg>
                                        <p>jaden.smith.junior@email.com</p>
                                    </div>
                                    <div className="socials-item">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.0245 8.0115C7.72825 9.24786 8.75214 10.2717 9.9885 10.9755L10.6515 10.047C10.7581 9.8977 10.9158 9.79266 11.0946 9.75175C11.2734 9.71084 11.4611 9.7369 11.622 9.825C12.6827 10.4047 13.8542 10.7533 15.0592 10.848C15.2473 10.8629 15.4229 10.9482 15.5509 11.0867C15.6789 11.2253 15.75 11.4071 15.75 11.5958V14.9423C15.75 15.1279 15.6812 15.3071 15.5568 15.4449C15.4324 15.5828 15.2612 15.6696 15.0765 15.6885C14.679 15.7297 14.2785 15.75 13.875 15.75C7.455 15.75 2.25 10.545 2.25 4.125C2.25 3.7215 2.27025 3.321 2.3115 2.9235C2.33044 2.73877 2.41724 2.56764 2.55509 2.44323C2.69295 2.31881 2.87205 2.24996 3.05775 2.25H6.40425C6.59292 2.24998 6.77467 2.32106 6.91326 2.44909C7.05185 2.57711 7.13709 2.75267 7.152 2.94075C7.24667 4.14584 7.59531 5.31726 8.175 6.378C8.2631 6.53892 8.28916 6.72656 8.24825 6.9054C8.20734 7.08424 8.1023 7.24188 7.953 7.3485L7.0245 8.0115ZM5.133 7.51875L6.558 6.501C6.15359 5.62807 5.87651 4.70163 5.73525 3.75H3.7575C3.753 3.8745 3.75075 3.99975 3.75075 4.125C3.75 9.717 8.283 14.25 13.875 14.25C14.0002 14.25 14.1255 14.2478 14.25 14.2425V12.2648C13.2984 12.1235 12.3719 11.8464 11.499 11.442L10.4813 12.867C10.0715 12.7078 9.6735 12.5198 9.29025 12.3045L9.24675 12.2797C7.77568 11.4425 6.55746 10.2243 5.72025 8.75325L5.6955 8.70975C5.48018 8.3265 5.29221 7.9285 5.133 7.51875Z"
                                                fill="black"
                                            />
                                        </svg>
                                        <p>+12 345 67890</p>
                                    </div>
                                </div>
                                <div className="creds">
                                    <div className="skill">
                                        <div className="skill-header">
                                            <h3>Skills</h3>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.00875 9.99981L10.3475 3.66106L9.46375 2.77731L3.125 9.11606V9.99981H4.00875ZM4.52688 11.2498H1.875V8.59793L9.02188 1.45106C9.13908 1.33389 9.29802 1.26807 9.46375 1.26807C9.62948 1.26807 9.78842 1.33389 9.90563 1.45106L11.6737 3.21918C11.7909 3.33639 11.8567 3.49533 11.8567 3.66106C11.8567 3.82679 11.7909 3.98573 11.6737 4.10293L4.52688 11.2498ZM1.875 12.4998H13.125V13.7498H1.875V12.4998Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div className="skill-content">
                                            <p>Design</p>
                                            <p>Front End Development</p>
                                            <p>Back End Development</p>
                                            <p>Back End Development</p>
                                        </div>
                                    </div>
                                    <div className="certification">
                                        <div className="certification-header">
                                            <h3>Certification</h3>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.00875 9.99981L10.3475 3.66106L9.46375 2.77731L3.125 9.11606V9.99981H4.00875ZM4.52688 11.2498H1.875V8.59793L9.02188 1.45106C9.13908 1.33389 9.29802 1.26807 9.46375 1.26807C9.62948 1.26807 9.78842 1.33389 9.90563 1.45106L11.6737 3.21918C11.7909 3.33639 11.8567 3.49533 11.8567 3.66106C11.8567 3.82679 11.7909 3.98573 11.6737 4.10293L4.52688 11.2498ZM1.875 12.4998H13.125V13.7498H1.875V12.4998Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>
                                                Build Web3 Platform From Scratch
                                            </h4>
                                            <span>
                                                <p>Issued February, 2022</p>
                                                <p>
                                                    <strong>Ref No.</strong>{' '}
                                                    723429134ixcfhru11`2457869034{' '}
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.08268 4.08317V1.74984C4.08268 1.59513 4.14414 1.44675 4.25354 1.33736C4.36293 1.22796 4.51131 1.1665 4.66602 1.1665H12.2493C12.4041 1.1665 12.5524 1.22796 12.6618 1.33736C12.7712 1.44675 12.8327 1.59513 12.8327 1.74984V9.33317C12.8327 9.48788 12.7712 9.63625 12.6618 9.74565C12.5524 9.85505 12.4041 9.9165 12.2493 9.9165H9.91602V12.2458C9.91602 12.5701 9.6541 12.8332 9.3286 12.8332H1.75343C1.67627 12.8332 1.59985 12.8181 1.52855 12.7886C1.45724 12.7591 1.39246 12.7159 1.3379 12.6613C1.28333 12.6067 1.24007 12.5419 1.21057 12.4706C1.18108 12.3993 1.16594 12.3229 1.16602 12.2458L1.16777 4.67059C1.16777 4.34625 1.42968 4.08317 1.75518 4.08317H4.08268ZM5.24935 4.08317H9.3286C9.65293 4.08317 9.91602 4.34509 9.91602 4.67059V8.74984H11.666V2.33317H5.24935V4.08317ZM2.33443 5.24984L2.33268 11.6665H8.74935V5.24984H2.33443Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </p>
                                            </span>
                                        </div>
                                        <div>
                                            <h4>How To Develop In Solidity</h4>
                                            <span>
                                                <p>Issued February, 2022</p>
                                                <p>
                                                    <strong>Ref No.</strong>{' '}
                                                    723429134ixcfhru11`2457869034{' '}
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.08268 4.08317V1.74984C4.08268 1.59513 4.14414 1.44675 4.25354 1.33736C4.36293 1.22796 4.51131 1.1665 4.66602 1.1665H12.2493C12.4041 1.1665 12.5524 1.22796 12.6618 1.33736C12.7712 1.44675 12.8327 1.59513 12.8327 1.74984V9.33317C12.8327 9.48788 12.7712 9.63625 12.6618 9.74565C12.5524 9.85505 12.4041 9.9165 12.2493 9.9165H9.91602V12.2458C9.91602 12.5701 9.6541 12.8332 9.3286 12.8332H1.75343C1.67627 12.8332 1.59985 12.8181 1.52855 12.7886C1.45724 12.7591 1.39246 12.7159 1.3379 12.6613C1.28333 12.6067 1.24007 12.5419 1.21057 12.4706C1.18108 12.3993 1.16594 12.3229 1.16602 12.2458L1.16777 4.67059C1.16777 4.34625 1.42968 4.08317 1.75518 4.08317H4.08268ZM5.24935 4.08317H9.3286C9.65293 4.08317 9.91602 4.34509 9.91602 4.67059V8.74984H11.666V2.33317H5.24935V4.08317ZM2.33443 5.24984L2.33268 11.6665H8.74935V5.24984H2.33443Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="education">
                                        <div className="education-header">
                                            <h3>Education</h3>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.00875 9.99981L10.3475 3.66106L9.46375 2.77731L3.125 9.11606V9.99981H4.00875ZM4.52688 11.2498H1.875V8.59793L9.02188 1.45106C9.13908 1.33389 9.29802 1.26807 9.46375 1.26807C9.62948 1.26807 9.78842 1.33389 9.90563 1.45106L11.6737 3.21918C11.7909 3.33639 11.8567 3.49533 11.8567 3.66106C11.8567 3.82679 11.7909 3.98573 11.6737 4.10293L4.52688 11.2498ZM1.875 12.4998H13.125V13.7498H1.875V12.4998Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>
                                                University of the world, USA
                                            </h4>
                                            <div className="text-text">
                                                <p>
                                                    Bachelor of Technology -
                                                    BTech, Computer and Software
                                                    Development
                                                </p>
                                                <p>Sep. 2016 - Dec. 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="experience">
                                        <div className="experience-header">
                                            <h3>Experience</h3>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.00875 9.99981L10.3475 3.66106L9.46375 2.77731L3.125 9.11606V9.99981H4.00875ZM4.52688 11.2498H1.875V8.59793L9.02188 1.45106C9.13908 1.33389 9.29802 1.26807 9.46375 1.26807C9.62948 1.26807 9.78842 1.33389 9.90563 1.45106L11.6737 3.21918C11.7909 3.33639 11.8567 3.49533 11.8567 3.66106C11.8567 3.82679 11.7909 3.98573 11.6737 4.10293L4.52688 11.2498ZM1.875 12.4998H13.125V13.7498H1.875V12.4998Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Product Designer</h4>
                                            <div className="text-text">
                                                <p>Partnr</p>
                                                <p>Sep. 2016 - Dec. 2021</p>
                                                <p className="text-ref">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sagittis libero elit,
                                                    elementum, nulla elementum.
                                                    Tempor arcu leo accumsan
                                                    eget. Integer vitae in
                                                    tempor aliquet at sed at id
                                                    amet. Risus auctor natoque
                                                    tincidunt euismod diam sed.
                                                    Lobortis sapien porttitor
                                                    suspendisse.
                                                </p>
                                                <p className="num-ref">
                                                    <strong>Ref No.</strong>{' '}
                                                    723429134ixcfhru11`2457869034{' '}
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.08268 4.08317V1.74984C4.08268 1.59513 4.14414 1.44675 4.25354 1.33736C4.36293 1.22796 4.51131 1.1665 4.66602 1.1665H12.2493C12.4041 1.1665 12.5524 1.22796 12.6618 1.33736C12.7712 1.44675 12.8327 1.59513 12.8327 1.74984V9.33317C12.8327 9.48788 12.7712 9.63625 12.6618 9.74565C12.5524 9.85505 12.4041 9.9165 12.2493 9.9165H9.91602V12.2458C9.91602 12.5701 9.6541 12.8332 9.3286 12.8332H1.75343C1.67627 12.8332 1.59985 12.8181 1.52855 12.7886C1.45724 12.7591 1.39246 12.7159 1.3379 12.6613C1.28333 12.6067 1.24007 12.5419 1.21057 12.4706C1.18108 12.3993 1.16594 12.3229 1.16602 12.2458L1.16777 4.67059C1.16777 4.34625 1.42968 4.08317 1.75518 4.08317H4.08268ZM5.24935 4.08317H9.3286C9.65293 4.08317 9.91602 4.34509 9.91602 4.67059V8.74984H11.666V2.33317H5.24935V4.08317ZM2.33443 5.24984L2.33268 11.6665H8.74935V5.24984H2.33443Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Product Designer</h4>
                                            <div className="text-text">
                                                <p>Partnr</p>
                                                <p>Sep. 2016 - Dec. 2021</p>
                                                <p className="text-ref">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sagittis libero elit,
                                                    elementum, nulla elementum.
                                                    Tempor arcu leo accumsan
                                                    eget. Integer vitae in
                                                    tempor aliquet at sed at id
                                                    amet. Risus auctor natoque
                                                    tincidunt euismod diam sed.
                                                    Lobortis sapien porttitor
                                                    suspendisse.
                                                </p>
                                                <p className="num-ref">
                                                    <strong>Ref No.</strong>{' '}
                                                    723429134ixcfhru11`2457869034{' '}
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M4.08268 4.08317V1.74984C4.08268 1.59513 4.14414 1.44675 4.25354 1.33736C4.36293 1.22796 4.51131 1.1665 4.66602 1.1665H12.2493C12.4041 1.1665 12.5524 1.22796 12.6618 1.33736C12.7712 1.44675 12.8327 1.59513 12.8327 1.74984V9.33317C12.8327 9.48788 12.7712 9.63625 12.6618 9.74565C12.5524 9.85505 12.4041 9.9165 12.2493 9.9165H9.91602V12.2458C9.91602 12.5701 9.6541 12.8332 9.3286 12.8332H1.75343C1.67627 12.8332 1.59985 12.8181 1.52855 12.7886C1.45724 12.7591 1.39246 12.7159 1.3379 12.6613C1.28333 12.6067 1.24007 12.5419 1.21057 12.4706C1.18108 12.3993 1.16594 12.3229 1.16602 12.2458L1.16777 4.67059C1.16777 4.34625 1.42968 4.08317 1.75518 4.08317H4.08268ZM5.24935 4.08317H9.3286C9.65293 4.08317 9.91602 4.34509 9.91602 4.67059V8.74984H11.666V2.33317H5.24935V4.08317ZM2.33443 5.24984L2.33268 11.6665H8.74935V5.24984H2.33443Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="body-data-arena" value="2">
                                <div className="course-list">
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Beginner Course</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi facilisi aliquet
                                                    ultricies euismod lorem.
                                                </p>
                                                <span>
                                                    <p className="remaining">
                                                        <MenuBookOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        5 Modules
                                                    </p>{' '}
                                                    <p className="time-rem">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        1 hour 30 mins
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <p className="percent">100%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Beginner Course</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi facilisi aliquet
                                                    ultricies euismod lorem.
                                                </p>
                                                <span>
                                                    <p className="remaining">
                                                        <MenuBookOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        5 Modules
                                                    </p>{' '}
                                                    <p className="time-rem">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        1 hour 30 mins
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <p className="percent">100%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Beginner Course</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi facilisi aliquet
                                                    ultricies euismod lorem.
                                                </p>
                                                <span>
                                                    <p className="remaining">
                                                        <MenuBookOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        5 Modules
                                                    </p>{' '}
                                                    <p className="time-rem">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        1 hour 30 mins
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <p className="percent">100%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Beginner Course</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi facilisi aliquet
                                                    ultricies euismod lorem.
                                                </p>
                                                <span>
                                                    <p className="remaining">
                                                        <MenuBookOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        5 Modules
                                                    </p>{' '}
                                                    <p className="time-rem">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        1 hour 30 mins
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <p className="percent">100%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="body-data-arena" value="3">
                                <div className="certificate-list">
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Intro. to Web3 Design</h4>
                                                <p>
                                                    Ref. Number:
                                                    1234567890rtuy78
                                                </p>
                                                <span>
                                                    <p className="issue-time">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        Issued February 2022
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="cert">
                                                <img src={certImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>Solidity for beginners</h4>
                                                <p>
                                                    Ref. Number:
                                                    1234567890rtuy78
                                                </p>
                                                <span>
                                                    <p className="issue-time">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        Issued February 2022
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="cert">
                                                <img src={certImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>
                                                    Intro. to smart contract
                                                </h4>
                                                <p>
                                                    Ref. Number:
                                                    1234567890rtuy78
                                                </p>
                                                <span>
                                                    <p className="issue-time">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        Issued February 2022
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="cert">
                                                <img src={certImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text">
                                                <h4>
                                                    How to design DAO systems
                                                </h4>
                                                <p>
                                                    Ref. Number:
                                                    1234567890rtuy78
                                                </p>
                                                <span>
                                                    <p className="issue-time">
                                                        <AccessTimeOutlinedIcon
                                                            sx={{
                                                                fontSize: 10,
                                                                mr: 0.3,
                                                            }}
                                                        />{' '}
                                                        Issued February 2022
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="cert">
                                                <img src={certImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="body-data-arena" value="4">
                                <div className="bounty-list">
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text-h">
                                                <h4>Solidity Dev...</h4>
                                                <p>In-progress</p>
                                            </div>
                                            <div className="text-b">
                                                <div className="b-body">
                                                    <h4>Stake Price</h4>
                                                    <p>5 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Min. Stake Price</h4>
                                                    <p>1 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Stake Poll</h4>
                                                    <p>20 Stakes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text-h">
                                                <h4>DAO Developer</h4>
                                                <p>In-progress</p>
                                            </div>
                                            <div className="text-b">
                                                <div className="b-body">
                                                    <h4>Stake Price</h4>
                                                    <p>5 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Min. Stake Price</h4>
                                                    <p>1 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Stake Poll</h4>
                                                    <p>20 Stakes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text-h">
                                                <h4>Solidity Dev..</h4>
                                                <p>In-progress</p>
                                            </div>
                                            <div className="text-b">
                                                <div className="b-body">
                                                    <h4>Stake Price</h4>
                                                    <p>5 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Min. Stake Price</h4>
                                                    <p>1 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Stake Poll</h4>
                                                    <p>20 Stakes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="content-sec">
                                            <div className="text-h">
                                                <h4>DAO Developer</h4>
                                                <p>In-progress</p>
                                            </div>
                                            <div className="text-b">
                                                <div className="b-body">
                                                    <h4>Stake Price</h4>
                                                    <p>5 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Min. Stake Price</h4>
                                                    <p>1 Ptr</p>
                                                </div>
                                                <div className="b-body">
                                                    <h4>Stake Poll</h4>
                                                    <p>20 Stakes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="body-data-arena" value="5">
                                <div className="nft-list">
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="text-sec">
                                            <h3>Futuristic Ooze</h3>
                                            <div className="text-sec-body">
                                                <div className="text-body-content">
                                                    <div className="text-secky">
                                                        <h4>Circulation</h4>
                                                        <p>2234</p>
                                                    </div>
                                                    <div className="text-secky">
                                                        <h4>Value</h4>
                                                        <p>200 Ptr</p>
                                                    </div>
                                                </div>
                                                <div className="text-body-con">
                                                    <img src={cardImg} alt="" />
                                                    <p>Johnson DAO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="text-sec">
                                            <h3>Futuristic Ooze</h3>
                                            <div className="text-sec-body">
                                                <div className="text-body-content">
                                                    <div className="text-secky">
                                                        <h4>Circulation</h4>
                                                        <p>2234</p>
                                                    </div>
                                                    <div className="text-secky">
                                                        <h4>Value</h4>
                                                        <p>200 Ptr</p>
                                                    </div>
                                                </div>
                                                <div className="text-body-con">
                                                    <img src={cardImg} alt="" />
                                                    <p>Johnson DAO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="text-sec">
                                            <h3>Futuristic Ooze</h3>
                                            <div className="text-sec-body">
                                                <div className="text-body-content">
                                                    <div className="text-secky">
                                                        <h4>Circulation</h4>
                                                        <p>2234</p>
                                                    </div>
                                                    <div className="text-secky">
                                                        <h4>Value</h4>
                                                        <p>200 Ptr</p>
                                                    </div>
                                                </div>
                                                <div className="text-body-con">
                                                    <img src={cardImg} alt="" />
                                                    <p>Johnson DAO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-single">
                                        <div className="photo-sec"></div>
                                        <div className="text-sec">
                                            <h3>Futuristic Ooze</h3>
                                            <div className="text-sec-body">
                                                <div className="text-body-content">
                                                    <div className="text-secky">
                                                        <h4>Circulation</h4>
                                                        <p>2234</p>
                                                    </div>
                                                    <div className="text-secky">
                                                        <h4>Value</h4>
                                                        <p>200 Ptr</p>
                                                    </div>
                                                </div>
                                                <div className="text-body-con">
                                                    <img src={cardImg} alt="" />
                                                    <p>Johnson DAO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
