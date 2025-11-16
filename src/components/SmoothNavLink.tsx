import { Link, useLocation, useNavigate } from 'react-router-dom';

interface SmoothNavLinkProps {
  path: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const SmoothNavLink = ({ path, label, className, onClick }: SmoothNavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    // Check if it's a hash link (anchor)
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.substring(2); // Remove '/#'
      
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
      onClick?.();
    } else {
      onClick?.();
    }
  };

  const isActive = path.startsWith('/#') 
    ? location.pathname === '/' && location.hash === path.substring(1)
    : location.pathname === path;

  return (
    <Link
      to={path}
      onClick={handleClick}
      className={className || `text-sm font-medium transition-colors hover:text-primary ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      {label}
    </Link>
  );
};

export default SmoothNavLink;
