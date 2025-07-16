import { socialMediaLinks } from "../../portFolio-data/greeting-data";
import styled from "styled-components";
import "./socialMedia.css";
const IconWrapper = styled.span`
    i {
        background-color: ${(props) => props.$backgroundColor || "transparent"};
    }
    &:hover i {
        background-color: ${({ theme }) => theme.text};
        transition: 0.3s ease-in;
    }
`;
export default function Socialmedia(props){
    return(
        <div className="social-media">
            {
                socialMediaLinks.map((media, index) => (
                    <a
                        key={index}
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-media-link-button"
                    >
                        <IconWrapper $backgroundColor={media.backgroundColor} {...props}>
                            <i className={`fab ${media.fontAwesomeIcon}`}></i>
                        </IconWrapper>
                    </a>
                ))
            }
        </div>
    )
}