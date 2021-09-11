import PropTypes from 'prop-types';
import s from 'components/FriendsList/FriendsList.module.css';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
