import React, { useContext, useState } from "react";
import CrudTableRow from "./CrudTableRow";
import LanguageContext from "../context/LanguageContext";
import { ICrudTableProps } from "../types";
import ConfirmDialog from "./ConfirmDialog";

const CrudTable = ({ data, setDataToEdit, deleteData }: ICrudTableProps) => {
  const { texts } = useContext(LanguageContext);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState<null | number>(null)

  const askDeleteData = (id: number) => {
    setIdToDelete(id)
    setShowConfirmDialog(true);
  };

  return (
    <div>
      {showConfirmDialog && <ConfirmDialog deleteData={deleteData} idToDelete={idToDelete} setShowConfirmDialog={setShowConfirmDialog} />}
      <h3>{texts.tableHeader}</h3>
      <table>
        <thead>
          <tr>
            <th>{texts.name}</th>
            <th>{texts.phone}</th>
            <th>{texts.tableActions}</th>
          </tr>
        </thead>
        <tbody>
          {!data.length ? (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          ) : (
            data.map((el, index) => (
              <CrudTableRow key={index} el={el} setDataToEdit={setDataToEdit} askDeleteData={askDeleteData} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
