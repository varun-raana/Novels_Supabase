import { useEffect, useState } from "react";

import NovelCard from "./NovelCard";
import supabase from "../../configStore/configStore";
import OrderBy from "../../components/orderBy/OrderBy";

import "./gridCard.scss";

const GridCards = () => {
	const [Novels, setNovels] = useState(null);
	const [Error, SetError] = useState(null);
	const [orderBy, setOrderBy] = useState("title");

	useEffect(() => {
		const fetchNovels = async () => {
			const { data, error } = await supabase
				.from("Novels")
				.select()
				.order(orderBy);

			if (error) {
				setNovels(null);
				console.log(error);
				SetError("No Data Have been found yet.");
			}

			if (data) {
				console.log(data);
				SetError(null);
				setNovels(data);
			}
		};

		fetchNovels();
	}, [orderBy]);

	const onDelete = (id) => {
		setNovels((prev) => {
			return prev.filter((novel) => novel.id !== id);
		});
	};

	return (
		<div className="box">
			<div className="orderContainer">
				<p>
					<span className="sort">sort by</span>
					<span className="orderBy">{orderBy}</span>
				</p>

				<OrderBy onClick={() => setOrderBy("title")} title={"title"} />
				<OrderBy
					onClick={() => setOrderBy("author")}
					title={"author"}
				/>
				<OrderBy
					onClick={() => setOrderBy("publisher")}
					title={"publisher"}
				/>
			</div>

			<div className="cards">
				{!Error &&
					Novels &&
					Novels.map((novel) => (
						<NovelCard
							key={novel.id}
							novel={novel}
							onDelete={onDelete}
						/>
					))}
			</div>

			<p>{Error && Error}</p>
		</div>
	);
};

export default GridCards;
