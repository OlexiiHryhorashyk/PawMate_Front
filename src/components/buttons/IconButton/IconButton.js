import classes from './IconButton.module.scss';

export default function IconButton({ title, src, onClick }) {
  return (
    <button onClick={onClick} className={classes.IconButton}>
      <img src={src} alt="" />
      {title}
    </button>
  );
}
