import { useEffect, useReducer } from "react";
import { actionTypes, reducer } from "../Reducer/localStorageReducer";



const useLocalStorage = (itemName) => {
  const initialValue = { artists: [], songs: [] }
  const initialState= {
    item: initialValue,
    loading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, item } = state;

  
  const onSetItem = (item) => {
    dispatch({
      type: actionTypes.ON_SET_ITEM,
      payload: {
        item: item,
      },
    });
  };
  
  useEffect(() => {
    const localItem = localStorage.getItem(itemName);
    let parsedItem = localItem ? JSON.parse(localItem) : initialValue;
    localStorage.setItem(itemName, JSON.stringify(parsedItem));
    onSetItem(parsedItem);
  }, []);

  const updateItem = (newItem) => {
    let stringifiedItem;
    try {
      stringifiedItem = JSON.stringify(newItem);
    } catch {
      stringifiedItem = JSON.stringify({ artists: [], songs: [] });
    } finally {
      localStorage.setItem(itemName, stringifiedItem);
      onSetItem(newItem);
    }
  };
  return { loading, item, updateItem };
};

export default useLocalStorage;
