import localStorage from "redux-persist/lib/storage";

// root persist reducers
const rootPersistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: [],
  whiteList: [],
};

export default rootPersistConfig;
