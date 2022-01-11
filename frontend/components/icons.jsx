import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faVial, faFastForward, faFastBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const BellIcon = () => <FontAwesomeIcon icon={faBell} className='icon' />
const VialIcon = () => <FontAwesomeIcon icon={faVial} className='icon' />
const PlayButton = () => <FontAwesomeIcon icon={faPlay} className='icon' />
const PauseButton = () => <FontAwesomeIcon icon={faPause} className='icon' />
const SkipButton = () => <FontAwesomeIcon icon={faFastForward} className='icon' />
const BackButton = () => <FontAwesomeIcon icon={faFastBackward} className='icon' /> 

export { BellIcon, VialIcon , PlayButton, PauseButton, SkipButton, BackButton };