import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToggleButton } from './ToggleTheme.styled';

interface ThemeProps {
  themeSt?: string;
  toggleTheme?: (value: boolean) => void;
}

const ToggleTheme: React.FC<ThemeProps> = ({ toggleTheme, themeSt }) => {
  const [checked, setChecked] = useState<boolean>(false);
  console.log(themeSt);
  const handleChange = () => {
    setChecked(!checked);
    toggleTheme !== undefined && toggleTheme(checked);
  };

  return (
    <ToggleButton onClick={handleChange}>
      {themeSt === 'darkTheme' ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </ToggleButton>
  );
};

export default ToggleTheme;
