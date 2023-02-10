import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import { ICrudFormProps, IUser } from "../types";

const initialForm = {
  name: "",
  phone: "",
  id: null,
};

const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}: ICrudFormProps) => {
  const [form, setForm] = useState<IUser>(initialForm);
  let navigate = useNavigate();

  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Missing data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset(true);
  };

  const handleReset = (goToHomePage: boolean) => {
    setForm(initialForm);
    setDataToEdit(null);
    if (goToHomePage) navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={texts.name}
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="number"
          name="phone"
          placeholder={texts.phone}
          onChange={handleChange}
          value={form.phone}
        />
        <input type="submit" value={texts.submit} />
        <input type="reset" value={texts.reset} onClick={() => handleReset(false)} />
      </form>
    </div>
  );
};

export default CrudForm;
