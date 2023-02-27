export const BookTags = ({tags}) => {

    const newSet = new Set(tags.subjects.flatMap( item => item.split(' -- ')))
    const result = Array.from(newSet)

    console.log(result)

    return (
        <div>
            {result.map((tag, index)=>(
                <div key={index}>{ tag }</div>
            ))}
        </div>
    )
}