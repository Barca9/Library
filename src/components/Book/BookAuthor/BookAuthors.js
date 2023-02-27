export const BookAuthors = ({author}) => {

    return (
        <div>
            {author.map((author, index) => (
                <div key={index}>
                    <div>{author.name}</div>
                    <div>(birth year:{author.birth_year} - death year:{author.death_year})</div>
                </div>
            ))}
        </div>
    )
}