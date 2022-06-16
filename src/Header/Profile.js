import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../Images/defaultAvatar.png';
//import '../stylesheets/Profile.css';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar profile-img"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export {Profile};