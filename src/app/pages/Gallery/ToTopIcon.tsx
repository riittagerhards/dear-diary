type ToTopIconProps = {
  className: string;
  onClick: () => void;
};

function ToTopIcon({ className, onClick }: ToTopIconProps): JSX.Element {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 0L25 12.931H19.1667V25H5.83333V12.931H0L12.5 0Z"
        fill="white"
      />
    </svg>
  );
}

export default ToTopIcon;
