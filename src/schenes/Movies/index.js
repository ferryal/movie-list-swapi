import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../actions/movie';

const ListMovie = () => {
	const card = useSelector(state => state.movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch])

	const renderListMovie = () => {
		const { movies } = card;
		return (
			<React.Fragment>
			{   movies.length > 0 ?	
					movies.map((data, index) => {
						return (
							<div className="col-sm-4" key={index + 1}>
								<div className={`card border-dark card-movie`}>
									<div className="number">{data.title}</div>
									<div className="card-body">
										<p>{data.opening_crawl}</p>
										<hr />
										<Link to={`/pokemon/${data.id}`}>More info</Link>
									</div>
								</div>
							</div>
						);
					})
					
				 : ''
			}
			</React.Fragment>
		);
	}

	return (
		<div className="wrapper-list-movie">
			<div className="navbar navbar-inverse navbar-fixed-top">
				<Link className="nav-movie m-left-15" to="/">Films</Link>
				<Link className="nav-movie" to='/people'>People</Link>
			</div>
			<div id="container" className="container">
				<div className="row">
					{renderListMovie()}
				</div>
			</div>
		</div>
	)

}

export default ListMovie;
