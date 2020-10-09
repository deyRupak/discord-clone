import React from 'react'
import './Sidebar.css'

import Avatar from "@material-ui/core/Avatar"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from '@material-ui/icons/Settings';
import { Headset, InfoOutlined, SignalCellularAlt } from '@material-ui/icons';

import SidebarChannel from './SidebarChannel'

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <h3>CloneServer</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
            </div>

            <AddIcon className="sidebar__addChannel" />
          </div>

          <div className="sidebar__channelsLisr">
            <SidebarChannel />
          </div>
        </div>

        <div className="sidebar__voice">
          <SignalCellularAlt
            className="sidebar__voiceIcon"
            fontSize = "large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar__voiceIcon">
            <InfoOutlined />
            <CallIcon />
          </div>
        </div>

        <div className="sidebar__profile">
          <Avatar />
          <div className="sidebar__profileInfo">
            <h3>Username</h3>
            <p>#myID</p>
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <Headset />
            <SettingsIcon />
          </div>
        </div>
      </div>
    );
}

export default Sidebar
