import classes from './ThemedButton.module.scss';

export default function ThemedButton({ title, isDark, onClick }) {
  const darkThemeClass = isDark ? classes.dark : '';
  return (
    <button
      onClick={onClick}
      className={`${classes.ThemedButton} ${darkThemeClass}`}
    >
      {title}
    </button>
  );
}
