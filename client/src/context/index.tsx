import produce from "immer";
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface IAppState {
  isSidebarOpen: boolean;
}

interface IAppStateContext {
  state: IAppState;
  dispatch: Dispatch<AppAction>;
}

type AppAction =
  | {
      type: "TOGGLE_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_SIDEBAR";
    };

const AppState: IAppState = {
  isSidebarOpen: true,
};

const AppReducer = (state: IAppState = AppState, action: AppAction) =>
  produce(state, (draft: IAppState): IAppState | undefined => {
    switch (action.type) {
      case "TOGGLE_SIDEBAR":
        draft.isSidebarOpen = !draft.isSidebarOpen;
        break;
      case "CLOSE_SIDEBAR":
        draft.isSidebarOpen = false;
        break;
      case "OPEN_SIDEBAR":
        draft.isSidebarOpen = true;
        break;
      default:
        return draft;
    }
  });

const AppContext = createContext<IAppStateContext>({} as IAppStateContext);

export const useAppContext = () => useContext<IAppStateContext>(AppContext);

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
