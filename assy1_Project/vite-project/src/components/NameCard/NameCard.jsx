
import PropTypes from 'prop-types';
import { ProfilePic } from '../ProfilePic/ProfilePic';
import './NameCard.css';

export const NameCard = ({ imgUrl, fName, lName, email, bio }) => {
  return (
    <div className="grid-container">
      <ProfilePic imgUrl={imgUrl} />
      <div>
        <h2 className="id-name">{fName} {lName}</h2>
        <p className="id-email">{email}</p>
        <p className="id-bio">{bio}</p>
      </div>
    </div>
  );
};

NameCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string
};
