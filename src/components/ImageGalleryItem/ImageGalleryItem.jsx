import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ items, onClick }) => {
  return items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li
      className={s.ImageGalleryItem}
      key={id}
      onClick={() => onClick(largeImageURL)}
    >
      <img
        className={s.ImageGalleryItem - image}
        src={webformatURL}
        alt={tags}
      ></img>
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
