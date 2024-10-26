
import PropTypes from 'prop-types';
import './ProfilePic.css';

export const ProfilePic = ({ imgUrl }) => {
  return (
    <div className='pic-container'>
        <img src={imgUrl} alt="Profile" />
    </div>
  );
};

ProfilePic.propTypes = {
  imgUrl: PropTypes.string.isRequired
};
