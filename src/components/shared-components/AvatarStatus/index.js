import React from 'react';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


export const AvatarStatus = props => {
	const { name, suffix, subTitle, id, src, onNameClick } = props
	const location = useLocation();
	return (
		<div className="avatar-status d-flex align-items-center">
			<div className="ml-2">
				<div>
					{
						onNameClick ? 
						<div onClick={() => onNameClick({name, subTitle, src, id})} className="avatar-status-name clickable">{name}</div> 
						:
						<div className="avatar-status-name">
							<NavLink to={location.pathname.replace('/all','')+"/"+id}>{name}</NavLink>
						</div>
					}
					<span>{suffix}</span>
				</div>
				<div className="text-muted avatar-status-subtitle">{subTitle}</div>
			</div>
		</div>
	)
}

AvatarStatus.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	type: PropTypes.string,
	onNameClick: PropTypes.func
}


export default AvatarStatus;
