import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import { ICrudTableRowProps } from "../types";

const CrudTableRow = ({
  el,
  setDataToEdit,
  askDeleteData,
}: ICrudTableRowProps) => {
  let { name, phone, id } = el;

  const { texts } = useContext(LanguageContext);

  let navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`edit/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <button onClick={handleEdit}>{texts.actionsEditButton}</button>
        <button onClick={() => askDeleteData(id)}>{texts.actionsDeleteButton}</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
