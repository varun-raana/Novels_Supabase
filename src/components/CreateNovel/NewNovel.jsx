import { useState } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "../../configStore/configStore";

import "./style.scss";

const NewNovel = () => {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		title: "",
		author: "",
		created_at: "",
		publisher: "",
		price: "",
		description: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!values.title ||
			!values.author ||
			!values.created_at ||
			!values.publisher ||
			!values.description ||
			!values.price
		) {
			return;
		}

		const { data, error } = await supabase
			.from("Novels")
			.insert(values)
			.select()
			.single();

		if (data) {
			console.log(data);
			navigate("/");
		}

		if (error) {
			console.log(error);
		}
	};

	// console.log(values);

	const handleChange = (e) => {
		e.preventDefault();

		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="novel">
			<form onSubmit={handleSubmit}>
				<div className="inputGroup">
					<label htmlFor="">Title</label>
					<input
						type="text"
						name="title"
						placeholder="Title"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Author</label>
					<input
						type="text"
						name="author"
						placeholder="Author"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Price</label>
					<input
						type="Number"
						name="price"
						placeholder="Price"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Date</label>
					<input
						type="date"
						name="created_at"
						placeholder="date"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Publisher</label>
					<input
						type="text"
						name="publisher"
						placeholder="publisher"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Description</label>
					<textarea
						name="description"
						placeholder="enter message"
						onChange={handleChange}></textarea>
				</div>

				<button type={"submit"}>Add</button>
			</form>
		</div>
	);
};

export default NewNovel;
