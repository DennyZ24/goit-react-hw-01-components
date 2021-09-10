import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};