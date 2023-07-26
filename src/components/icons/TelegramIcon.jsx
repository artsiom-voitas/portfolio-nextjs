import PropTypes from 'prop-types';

function TelegramIcon({ className = '', ...rest }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`h-auto w-full ${className}`}
            {...rest}>
            <circle
                cx={12}
                cy={12}
                r={12}
                fill="#039be5"
            />
            <path
                fill="#fff"
                d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
            />
        </svg>
    );
}

TelegramIcon.propTypes = {
    className: PropTypes.string
};

export default TelegramIcon;
