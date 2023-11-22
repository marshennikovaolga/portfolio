import './ExampleForm.css'

export default function ExampleForm({ title, description, list, href }) {

    return (
        <>
            <div className="example">
                <h2 className="example__title link-icon">{title}</h2>
                <div className='example__container'>
                    <p className='example__list'>{list}</p>
                </div>
                <p className="example__description">{description}</p>
                <p><a className="example__git-link icon-github" href={href}>github repository</a></p>
            </div>
        </>
    )
}