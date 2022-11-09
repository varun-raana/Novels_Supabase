import { useEffect, useState } from "react";

import supabase from "../../configStore/configStore";
import { useParams, useNavigate } from "react-router-dom";

import "./style.scss";

const NovelForm = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [values, setValues] = useState({
		title: "",
		author: "",
		publisher: "",
		description: "",
		price: "",
	});

	/* HANDLE SUBMIT FORM */
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from("Novels")
			.update(values)
			.eq("id", id)
			.select()
			.single();

		if (data) {
			console.log(data);
			navigate("/");
		}

		if (error) {
			console.log(error);
		}

		console.log(data);
	};

	/* RUNS ONLY WHEN ID CHANGE */
	useEffect(() => {
		const fetchNovelById = async () => {
			const { data, error } = await supabase
				.from("Novels")
				.select()
				.eq("id", id)
				.single();

			if (error) {
				console.log(error);
				// navigate("/", { replace: true });
			}

			if (data) {
				console.log(data);
				setValues({
					title: data.title,
					author: data.author,
					publisher: data.publisher,
					description: data.description,
					price: data.price,
				});
			}
		};

		fetchNovelById();
	}, [id, navigate]);

	/* UPDATE STATE WITH HANDLE CHANGE */
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
						value={values.title}
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Author</label>
					<input
						type="text"
						name="author"
						value={values.author}
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Price</label>
					<input
						type="Number"
						name="price"
						value={values.price}
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Publisher</label>
					<input
						type="text"
						value={values.publisher}
						name="publisher"
						onChange={handleChange}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="">Description</label>
					<textarea
						value={values.description}
						name="description"
						onChange={handleChange}></textarea>
				</div>

				<button type="submit">Update</button>
			</form>
		</div>
	);
};

export default NovelForm;
