import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPeopleDetail } from '../../actions/movie';

const PeopleInfo = (props) => {
	const dispatch = useDispatch();
	const card = useSelector(state => state.peopleInfo);

	useEffect(() => {
		dispatch(fetchPeopleDetail(props.match.params.id));
	}, [dispatch]);

    const { detail } = card;
		
    return(
			<React.Fragment>
				<div className="navbar navbar-inverse navbar-fixed-top">
					<Link className="nav-movie m-left-15" to="/">Movies</Link>
					<Link className="nav-movie" to='/people'>People</Link>
				</div>
				<div id="container" className="container">	
					<div className="card-deck">
						<div className="card wrapper-detail">
							<div className="text-center">
                                <h2>{detail.name}</h2>
                                <p>Birth: {detail.birth_year}</p>
							</div>
							<div className="card-body">
                                <div className="card-title text-center">
                                    <p>Skin color:{detail.skin_color}</p>
                                    <p>Hair color: {detail.hair_color}</p>
                                    <p>Eye color: {detail.eye_color}</p>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
    )

}

export default PeopleInfo;
