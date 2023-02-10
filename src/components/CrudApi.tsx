import React, { useState, useEffect, useContext } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Error from "./Error";
import { firebase } from "../api/firebase";
import {
  getDatabase,
  ref,
  get,
  child,
  set,
  update,
  remove,
} from "firebase/database";
import LanguageContext from "../context/LanguageContext";
import { IUser, Users, IUserUpdate } from "../types";

const firebaseDb = getDatabase(firebase);
const firebaseDbRef = ref(firebaseDb);

const CrudApi = () => {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [db, setDb] = useState<Users>([]);
  const [loading, setLoading] = useState(false);

  const { texts, handleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setLoading(true);

    get(child(firebaseDbRef, "users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const result = Object.keys(data).map((key) => data[key]);
          setDb(result);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const createData = (data: IUser) => {
    ("createData")
    data.id = Date.now();
    set(ref(firebaseDb, "users/" + data.id), data).then(() => {
      setDb([...db, data]);
    });
  };

  const updateData = (data: IUser) => {
    const updates: IUserUpdate = {};
    updates["/users/" + data.id] = data;
    update(ref(firebaseDb), updates).then(() => {
      const result = db.map((el) => (el.id !== data.id ? el : data));
      setDb(result);
    });
  };

  const deleteData = (id: number) => {
    remove(ref(firebaseDb, "users/" + id)).then(() => {
      const result = db.filter((el) => el.id !== id);
      setDb(result);
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <button
            onClick={handleLanguage}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="50px"
              height="50px"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
            </svg>
          </button>
        </div>
      </div>
      <Router>
        <header>
          <h2>{texts.headerTitle}</h2>
          <nav>
            <NavLink to="/">{texts.headerLinkRead}</NavLink>
            <NavLink to="/add">{texts.headerLinkAdd}</NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>{texts.contentTitle}</h2>
                {loading && <Loader />}

                {db && (
                  <CrudTable
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <>
                <h2>{texts.addContact}</h2>
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              </>
            }
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <>
                <h2>Edit contact</h2>
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              </>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default CrudApi;
