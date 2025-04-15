import css from '../Profile/Profile.module.css';
console.log(css);

export default function Profile({ data }) {
  const { username, tag, location, avatar, stats } = data;
  return (
    <div className={css.wrapper}>
      <div className={css.flexcenter}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.metrics}>
        {Object.keys(stats).map((key) => {
          return (
            <li className={css.metricsItem} key={key}>
              <span className={css.metric}>{key}</span>
              <span className={css.count}>{stats[key]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
