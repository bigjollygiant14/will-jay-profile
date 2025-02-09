interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ className, ...rest }) => {
  return (
    <div className={`h-screen top-0 left-0 w-screen bg-gray-800/50 ${className}`} {...rest}></div>
  );
};

export default Overlay;
