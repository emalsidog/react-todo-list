// Constants
import { GET_FOLDERS_REQUEST, 
  GET_FOLDERS_SUCCESS, 
  GET_FOLDERS_FAILURE, 
  CREATE_FOLDER_REQUEST, 
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE } from "../constants/folderActionTypes";

const initialState = {
  folders: [],
  isLoading: false,
  error: {
    isError: false,
    message: ""
  }
}

const folder = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS_REQUEST: {
      return {
        ...state, isLoading: true
      }
    }
    case GET_FOLDERS_SUCCESS: {
      return {
        ...state, folders: action.payload, isLoading: false
      }
    }
    case GET_FOLDERS_FAILURE: {
      return {
        ...state, isLoading: false, error: { isError: true, message: action.payload }
      }
    }
    case CREATE_FOLDER_REQUEST: {
      return {
        ...state, folders: [...state.folders, action.payload], isLoading: true,
      }
    }
    case CREATE_FOLDER_SUCCESS: {
      const { newFolder, fakeFolder } = action.payload;
      const { folders } = state

      const idx = folders.indexOf(fakeFolder);
      const newFolders = [...folders.slice(0, idx), newFolder, ...folders.slice(idx + 1)]

      return {
        ...state, isLoading: false, folders: newFolders
      }
    }
    case CREATE_FOLDER_FAILURE: {
      return {
        ...state, isLoading: false, error: { isError: true, message: action.payload }
      }
    }
    default: {
      return state;
    }
  }
}

export default folder