import classes from './NavButton.module.scss';

export default function NavButton({ title, isActive, onClick }) {
  const activeClass = isActive ? classes.active : '';
  return (
    <button onClick={onClick} className={`${classes.NavButton} ${activeClass}`}>
      {title}
    </button>
  );
}
