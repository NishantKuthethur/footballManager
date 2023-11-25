import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUsersLine } from '@fortawesome/free-solid-svg-icons';

export default function Nav({isActive}) {
  return (
    <div>
      <ul className="flex flex-col items-center gap-8">
                <li className="relative">
                    <Link to="/roster" className="flex items-center justify-center h-12 w-12">
                    {isActive('/roster') && <div className="absolute left-0 ml-[3px] w-1 h-1 bg-primary-orange rounded-full" />}
                    <FontAwesomeIcon icon={faBars} className={`h-5 w-5 ${isActive('/roster') ? 'text-primary-orange' : 'text-primary-orangeMutated'}`} />
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/formation" className="flex items-center justify-center h-12 w-12">
                    {isActive('/formation') && <div className="absolute left-0 ml-[3px] w-1 h-1 bg-primary-orange rounded-full" />}
                    <FontAwesomeIcon icon={faUsersLine} className={`h-5 w-5 ${isActive('/formation') ? 'text-primary-orange' : 'text-primary-orangeMutated'}`} />
                    </Link>
                </li>
            </ul>
    </div>
  )
}

Nav.propTypes = {
    isActive: PropTypes.func.isRequired,
  };
