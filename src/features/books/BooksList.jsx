import BookExcerpt from "./BookExcerpt";
import { useGetBooksQuery } from "./booksSlice";

const BooksList = () => {
	const { data: books, isLoading, isSuccess, error } = useGetBooksQuery();

	return (
		<div>
			<BookExcerpt />
		</div>
	);
};

export default BooksList;
