import { ConfirmDialogProps } from "../types";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ConfirmDialog = ({
  deleteData,
  idToDelete,
  setShowConfirmDialog,
}: ConfirmDialogProps) => {
  const handleClick = (confirmation: boolean) => {
    if (confirmation) deleteData(idToDelete);
    setShowConfirmDialog(false);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="confirm-dialog">
        <div
          className={
            theme === "dark"
              ? "confirm-dialog-container confirm-dialog-container--dark"
              : "confirm-dialog-container"
          }
        >
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
