import React from 'react';
import classNames from 'classnames';
import './GyroSignature.css';

const GyroSignature = ({ className }) => (
    <svg
        className={classNames('gyro-signature', className)}
        viewBox="0 0 420 420"
        aria-hidden="true"
        focusable="false"
    >
        <circle className="gyro-signature__halo" cx="210" cy="210" r="154" />
        <ellipse className="gyro-signature__orbit gyro-signature__orbit--one" cx="210" cy="210" rx="158" ry="68" transform="rotate(28 210 210)" />
        <ellipse className="gyro-signature__orbit gyro-signature__orbit--two" cx="210" cy="210" rx="142" ry="52" transform="rotate(112 210 210)" />
        <path className="gyro-signature__gesture" d="M72 244C119 111 282 85 344 194C390 275 292 352 196 326C126 307 102 245 139 196C176 148 267 154 289 213C305 255 265 288 225 276" />
        <circle className="gyro-signature__node gyro-signature__node--one" cx="74" cy="244" r="5" />
        <circle className="gyro-signature__node gyro-signature__node--two" cx="344" cy="194" r="5" />
        <circle className="gyro-signature__core" cx="225" cy="276" r="8" />
    </svg>
);

export default GyroSignature;
