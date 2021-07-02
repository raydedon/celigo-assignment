import React, {useCallback, useEffect, useState} from 'react';
import {
    NavLink
} from 'react-router-dom';
import classes from './topNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import {
    useLocation
} from 'react-router-dom';

const TopNav = (props) => {
    const {links} = props;
    let location = useLocation();
    const [isExpanded, setExpanded] = useState(false);
    const onClickHandler = useCallback(() => {
        setExpanded(!isExpanded);
    }, [isExpanded]);
    
    useEffect(() => {
        setExpanded(false);
    }, [location.pathname]);
    
    return (
        <div className={classnames(classes.topNav, isExpanded && classes.expand)}>
            {links.map(l => <NavLink activeClassName={classes.active} to={l.to} exact={!!l.exact} key={l.id} className={classnames(classes.links, {[classes.leftContent]: l.orient === 'left', [classes.rightContent]: l.orient === 'right'})}>{l.text}</NavLink>)}
            <button className={classes.icon} onClick={onClickHandler}>
                <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} className={classes.faIcon}/>
            </button>
        </div>
    );
};

export {TopNav};
export default TopNav;
