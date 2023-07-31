import PropTypes from 'prop-types';

function TwitterIcon({ className = '', ...rest }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={100}
            viewBox="0 0 50 50"
            className={`h-auto w-full ${className}`}
            {...rest}>
            <path d="M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7H11zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896L13.086 13zm3.828 2 14.107 20h3.065L19.979 15h-3.065z" />
        </svg>
    );
}

TwitterIcon.propTypes = {
    className: PropTypes.string
};

export default TwitterIcon;
