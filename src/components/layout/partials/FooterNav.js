import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  var and="&"
  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/contact#top">Contact {and} Support</Link>
        </li>
        <li>
          <Link to="/aboutus#top">About us</Link> {/** add new page */}
        </li>

      </ul>
    </nav>
  );
}

export default FooterNav;