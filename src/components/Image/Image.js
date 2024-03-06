import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFailBack] = useState('');
    const handleError = () => {
        setFailBack(customFallback);
    };
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
