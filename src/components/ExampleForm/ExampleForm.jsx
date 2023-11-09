import './ExampleForm.css'

export default function ExampleForm({ title, description, href }) {
    return (
        <>
            <div className="example">
                <h2 className="example__title">{title}</h2>
                <p className="example__description">{description}</p>
                <p><a className="example__git-link" href={href}>github repository</a></p>
            </div>
        </>
    )
}