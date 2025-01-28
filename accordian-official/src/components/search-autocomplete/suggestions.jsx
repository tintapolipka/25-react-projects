export default function Suggestions({ data,onClickHandler }) {
  return (
    <ul>
      {data && data.length
        ? data.map((user, index) => <li key={index} onClick={onClickHandler}>{user}</li>)
        : null}
    </ul>
  );
}
