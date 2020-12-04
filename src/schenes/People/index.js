import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchCharacters } from '../../actions/movie';

const ListMovie = () => {
	const card = useSelector(state => state.people);
	const dispatch = useDispatch();
	const [hasMore, setHasMore] = useState(true)
	const [start, setStart] = useState(1);
	const [count] = useState(1);
	const [items, setItems] = useState([]);

	useEffect(() => {
		dispatch(fetchCharacters(start));
	}, [dispatch])


	useEffect(() => {
		if (card.people !== 0 && card.people.length > 0 ) {
			const { people } = card;
			setStart(start + count);
			setTimeout(() => {
				setItems(items.concat(people));
			}, 1500)
		}
	}, [card.people]);

	const fetchImages = () => {
			if (items.length >= 964) {
				setHasMore(false);
				return;
			}
			setTimeout(() => {
				dispatch(fetchCharacters(start))
			}, 2500)
		};

	const renderListMovie = () => {
		const { people } = card;
		return (
			<React.Fragment>
			{   people.length > 0 ?
					<InfiniteScroll
							dataLength={people.length}
							next={fetchImages}
							hasMore={hasMore}
							loader={<img src="/assets/images/spinner.gif" alt="" style={{ width: '20%'}} />}
							height={600}
							style={{
								width: 'auto',
								display: 'flex',
								maxWidth: '80%',
								margin: '2% auto',
								flexWrap: 'wrap',
								alignItems: 'flex-start',
								textAlign: 'center',
							}}
							endMessage={
								<p style={{ textAlign: "center" }}>
									<b>Yay! You have seen it all</b>
								</p>
							}
						>

						{
							items !== undefined && items.length > 0 ? 
								items.map((data, index) => {
									return (
										<div className="col-sm-4" key={index + 1}>
											<div className={`card border-dark card-movie`}>
												<div className="number">{data.name}</div>
												<div className="card-body">
													<p>Height: {data.height}</p>
													<p>Mass: {data.mass}</p>
													<p>Hair color:{data.hair_color}</p>
													<p>Skin color:{data.skin_color}</p>
													<p>Gender: {data.gender}</p>
													<hr />
													<Link to={`/people/${index+1}`}>More info</Link>
												</div>
											</div>
										</div>
									);
								})
							: ''

						}
					</InfiniteScroll>
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
