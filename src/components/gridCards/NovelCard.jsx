import { Link } from "react-router-dom";

import "./novelCard.scss";
import supabase from "../../configStore/configStore";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

const NovelCard = ({ novel, onDelete }) => {
	const handleDelete = async () => {
		const { data, error } = await supabase
			.from("Novels")
			.delete()
			.select()
			.eq("id", novel.id);

		if (data) {
			console.log(data);
			console.log("delete");
			onDelete(novel.id);
		}

		if (error) {
			console.log(error);
		}
	};

	return (
		<figure className="novelCard">
			<h1>{novel.title}</h1>
			<p>{novel.description}</p>
			<figcaption>
				<div>
					<p>{novel.author}__</p>
					<small>--{novel.publisher}</small>
				</div>
				<h4>
					<span>$</span>&nbsp;
					<span>{novel.price}.00</span>
				</h4>
			</figcaption>

			<div className="buttonContainer">
				<Link className="button" to={`/${novel.id}`}>
					<HiOutlinePencil />
				</Link>
				<button className="button" onClick={handleDelete}>
					<HiOutlineTrash />
				</button>
			</div>
		</figure>
	);
};

export default NovelCard;
