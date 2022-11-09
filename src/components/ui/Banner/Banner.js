import classes from './Banner.module.scss';
import ThemedButton from '../../buttons/ThemedButton/ThemedButton';

export default function Banner({ text, buttonTitle, isDark, onClick }) {
  return (
    <div class={classes.Banner}>
      <span>{text}</span>
      <ThemedButton isDark={isDark} onClick={onClick} title={buttonTitle} />
    </div>
  );
}
