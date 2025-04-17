import css from './TransactionHistory.module.css';
export default function TransactionHistory({ history }) {
  console.log(history);

  return (
    <table className={css.wrapper}>
      <thead>
        <tr className={css.head}>
          <th className={css.headtext}>Type</th>
          <th className={css.headtext}>Amount</th>
          <th className={css.headtext}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {history.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.row}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
