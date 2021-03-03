import { GET_FOLDERS, CREATE_FOLDER } from "../constants/folderActionTypes";

const initialState = {
  folders: [],
  isLoading: false,
  isError: false
}

const folder = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS: {
      return {
        ...state, folders: action.payload
      }
    }
    case CREATE_FOLDER: {
      return {
        ...state, folders: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default folder