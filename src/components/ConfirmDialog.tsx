import { ConfirmDialogProps } from "../types";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

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
  const { texts } = useContext(LanguageContext);

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
          <div className="confirm-dialog-message">
            {texts.confirmDialogMessage}
          </div>
          <div className="confirm-dialog-actions">
            <button
              className="confirm-dialog-action-button confirm-dialog-action-accept"
              onClick={() => {
                handleClick(true);
              }}
            >
              {texts.confirmDialogConfirmButton}
            </button>
            <button
              className="confirm-dialog-action-button confirm-dialog-action-cancel"
              onClick={() => {
                handleClick(false);
              }}
            >
              {texts.confirmDialogCancelButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
