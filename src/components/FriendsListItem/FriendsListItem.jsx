import PropTypes from 'prop-types';
import s from 'components/FriendsListItem/FriendsListItem.module.css';

export default function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
