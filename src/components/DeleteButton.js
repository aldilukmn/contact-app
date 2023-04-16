function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact_item_delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
