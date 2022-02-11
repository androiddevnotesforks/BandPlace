import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faFastForward, faFastBackward, faPlay, faPause, faSearch,  
    faHeadphones, faRecordVinyl, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

const BellIcon = () => <FontAwesomeIcon icon={faBell} className='icon' />
const VialIcon = () => <FontAwesomeIcon icon={faBars} className='icon' />
const PlayButton = () => <FontAwesomeIcon icon={faPlay} className='icon' />
const PauseButton = () => <FontAwesomeIcon icon={faPause} className='icon' />
const SkipButton = () => <FontAwesomeIcon icon={faFastForward} className='icon' />
const BackButton = () => <FontAwesomeIcon icon={faFastBackward} className='icon' /> 
const SearchIcon = () => <FontAwesomeIcon icon={faSearch} className='icon' />
const Headphones = () => <FontAwesomeIcon icon={faHeadphones} className='icon' />
const Records = () => <FontAwesomeIcon icon={faRecordVinyl} className='icon' />
const Mic = () => <FontAwesomeIcon icon={faMicrophoneAlt} className='icon' />


export { BellIcon, VialIcon , PlayButton, PauseButton, SkipButton, BackButton, SearchIcon,
Headphones, Mic, Records };