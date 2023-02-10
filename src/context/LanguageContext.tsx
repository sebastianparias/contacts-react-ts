import { createContext, useState } from "react";
import { ITranslation, ITranslations, ILanguageContext } from "../types";

const LanguageContext = createContext<ILanguageContext>(
  {} as ILanguageContext
);

const initialLanguage = "en";
const translations: ITranslations = {
  es: {
    headerTitle: "API CRUD con rutas",
    headerLinkRead: "Ver todos",
    headerLinkAdd: "Añadir",
    contentTitle: "Inicio",
    tableHeader: "Lista de contactos",
    tableActions: "Acciones",
    actionsEditButton: "Editar",
    actionsDeleteButton: "Eliminar",
    addContact: "Añadir contacto",
    name: "Nombre",
    phone: "Teléfono",
    submit: "Enviar",
    reset: "Limpiar campos",
    languageButton: "Cambiar a inglés"
  },
  en: {
    headerTitle: "CRUD API with routes",
    headerLinkRead: "See all",
    headerLinkAdd: "Add",
    contentTitle: "Home",
    tableHeader: "Contacts list",
    tableActions: "Actions",
    actionsEditButton: "Edit",
    actionsDeleteButton: "Delete",
    addContact: "Add contact",
    name: "Name",
    phone: "Phone",
    submit: "Submit",
    reset: "Clear fields",
    languageButton: "See in spanish"
  },
};

const LanguageProvider = (props: any) => {
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [texts, setTexts] = useState<ITranslation>(translations[language]);

  const handleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
      setTexts(translations["en"]);
    } else {
      setLanguage("es");
      setTexts(translations["es"]);
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{props.children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
