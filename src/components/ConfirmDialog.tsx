import {ConfirmDialogProps} from '../types'

const ConfirmDialog = ({ deleteData, idToDelete, setShowConfirmDialog }: ConfirmDialogProps) => {
  const handleClick = (confirmation: boolean) => {
    if (confirmation) deleteData(idToDelete);
    setShowConfirmDialog(false);
  };

  return (
    <>
      <div className="confirm-dialog">
        <div className="confirm-dialog-container">
          <div className="confirm-dialog-message">¿Estás seguro?</div>
          <div className="confirm-dialog-actions">
            <button
              className="confirm-dialog-action-button confirm-dialog-action-accept"
              onClick={() => {
                handleClick(true);
              }}
            >
              Confirmar
            </button>
            <button
              className="confirm-dialog-action-button confirm-dialog-action-cancel"
              onClick={() => {
                handleClick(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
