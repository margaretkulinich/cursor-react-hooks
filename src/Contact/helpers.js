import { faGenderless, faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getGenderIcon = (gender) => {
    switch (gender) {
        case 'male':
            return < FontAwesomeIcon icon={faMars} />
        case 'female':
            return < FontAwesomeIcon icon={faVenus} />
        default:
            return < FontAwesomeIcon icon={faGenderless} />
    }
};