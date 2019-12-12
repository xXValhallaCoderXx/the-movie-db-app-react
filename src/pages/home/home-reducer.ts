export interface IAction {
  type: string;
}

export interface IOnChange extends IAction {
  payload: string;
}

// export interface ISetStatusAction extends IAction {
//   payload: {
//     index: number;
//     status: string;
//   };
// }

// The Type Guard Functions
function isOnChangeAction(action: IAction): action is IOnChange {
  return action.type === "ON_CHANGE";
}

const homeReducer = (state: any, action: IAction) => {
  if (isOnChangeAction(action)) {
    return {
      ...state,
      value: action.payload
    };
  }
};

export {homeReducer};
