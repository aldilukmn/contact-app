import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact_item_delete" onClick={() => onDelete(id)}>
      <FiDelete/>
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteButton;
