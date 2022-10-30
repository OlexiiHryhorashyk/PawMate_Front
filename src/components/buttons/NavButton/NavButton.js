import classes from './NavButton.module.scss';

export default function NavButton({ title, isActive, onClick }) {
  const activeClass = isActive ? classes.NavButton__active : '';
  return (
    <button onClick={onClick} className={`${classes.NavButton} ${activeClass}`}>
      {title}
    </button>
  );
}

/* <>
{buttons.map((button, i) => (
  <NavButton
    key={i}
    isActive={i === activeId}
    title={button}
    onClick={() => setActiveId(i)}
  />
))}
</> */
