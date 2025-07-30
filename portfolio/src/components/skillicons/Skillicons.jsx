import './Skillicons.css';
// eslint-disable-next-line no-unused-vars
function Skillicons(props) {
    const images = import.meta.glob('../../assets/skills/*', { eager: true });
    const getImages = (imageName) => {
        const key = `../../assets/skills/${imageName}`;
        return images[key]?.default;
    }
    return (
        <div className='skill-icon-container'>
            {
                props.icons.map((icon, i) => (
                    <img key={i}
                        title={icon.name}
                        className='skill-icon'
                        src={getImages(icon.iconClass)}
                        alt='Tech Icons' />
                ))
            }
        </div>
    )
}
export default Skillicons;