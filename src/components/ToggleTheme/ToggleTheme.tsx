import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToggleButton } from './ToggleTheme.styled';

interface ThemeProps {
  themeSt?: string;
  toggleTheme?: (value: boolean) => void;
}

const ToggleTheme: React.FC<ThemeProps> = ({ toggleTheme }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    setChecked(!checked);
    toggleTheme !== undefined && toggleTheme(checked);
  };

  return (
    <ToggleButton onClick={handleChange}>
      {checked ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </ToggleButton>
  );
};

export default ToggleTheme;
