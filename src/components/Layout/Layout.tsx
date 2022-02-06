import { GlobalCss } from '../GlobalCss';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalCss />
      {children}
    </div>
  );
};
