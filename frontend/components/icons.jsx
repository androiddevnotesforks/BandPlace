import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faVial} from '@fortawesome/free-solid-svg-icons';

const BellIcon = () => <FontAwesomeIcon icon={faBell} className='icon' />
const VialIcon = () => <FontAwesomeIcon icon={faVial} className='icon' />

export { BellIcon, VialIcon };