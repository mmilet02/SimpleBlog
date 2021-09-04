import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Marin")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault()

        setIsPending(true)

        const newBlog = { title, body, author }
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBlog)
        }).then(() => {
            setIsPending(false)
            setTitle("")
            setBody("")
            setAuthor("Marin")
            history.push("/")
        })

    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Anshela">Anshela</option>
                    <option value="Marin">Marin</option>
                </select>
                {!isPending ? (<button>Add Blog</button>) : <button disabled>Adding Blog....</button>}
            </form>
        </div>
    )
}

export default Create
