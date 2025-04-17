import css from './FriendItem.module.css';
export default function FriendItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={css.wrapper}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={[css.status, isOnline && css.isOnline].join(' ')}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
