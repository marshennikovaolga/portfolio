import './ExampleForm.css'
import styled from '@emotion/styled';

const StyledTitle = styled.h2`
  color: #000;
  font-weight: 500;
  width: 400px;
  font-size: 27px;
  line-height: 35px;
  font-family: 'New-York';
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 10px;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export { StyledTitle };

export default function ExampleForm({ title, description, list, href }) {

    return (
        <>
            <div className="example">
                <StyledTitle className="example__title link-icon">{title}</StyledTitle>
                <div className='example__container'>
                    <p className='example__list icon-tech'>{list}</p>
                </div>
                <p className="example__description">{description}</p>
                <p><a className="example__git-link icon-github" href={href}>github repository</a></p>
            </div>
        </>
    )
}
