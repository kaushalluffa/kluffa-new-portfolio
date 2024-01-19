import { memo } from 'react';

function Gmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <path
        d="M3.27273 36.0088H10.9091V17.4633L0 9.28151V32.7361C0 34.5442 1.46455 36.0088 3.27273 36.0088Z"
        fill="#4285F4"
      />
      <path
        d="M37.0909 36.0088H44.7273C46.5355 36.0088 48 34.5442 48 32.7361V9.28151L37.0909 17.4633V36.0088Z"
        fill="#34A853"
      />
      <path
        d="M37.0909 3.28155V17.4634L48 9.28155V4.91791C48 0.873365 43.3828 -1.43664 40.1455 0.990637L37.0909 3.28155Z"
        fill="#FBBC04"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9091 17.4633V3.28152L24 13.0997L37.0909 3.28152V17.4633L24 27.2815L10.9091 17.4633Z"
        fill="#EA4335"
      />
      <path
        d="M0 4.91791V9.28155L10.9091 17.4634V3.28155L7.85455 0.990637C4.61727 -1.43664 0 0.873365 0 4.91791Z"
        fill="#C5221F"
      />
    </svg>
  );
}

export default memo(Gmail);