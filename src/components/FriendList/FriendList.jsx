import FriendItem from './FriendItem/FriendItem';
import css from './FriendList.module.css';
export default function FriensList({ friends }) {
  return (
    <ul className={css.wrapper}>
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
