// Constants
import * as types from "../constants/folderActionTypes";

// Service
import FolderService from "../services/folders";
const foldersService = new FolderService();

export const getFolders = () => {
  return async dispatch => {
    dispatch({ type: types.GET_FOLDERS_REQUEST });

    const { isError, message, body } = await foldersService.getFolders();

    if(isError) {
      dispatch({ type: types.GET_FOLDERS_FAILURE, payload: message });
    } else {
      dispatch({ type: types.GET_FOLDERS_SUCCESS, payload: body.folders });
    }
  }
}

export const createFolder = title => {
  return async dispatch => {
    const _id = Math.floor(Math.random() * (999999 - 100000) + 100000);  
    
    const fakeFolder = {
      todos: [],
      _id,
      title: title.title,
    }

    dispatch({ type: types.CREATE_FOLDER_REQUEST, payload: fakeFolder });

    const { isError, message, body } = await foldersService.createFolder(title);

    if (isError) {
      dispatch({ type: types.CREATE_FOLDER_FAILURE, payload: message });
    } else {
      dispatch({ type: types.CREATE_FOLDER_SUCCESS, payload: { newFolder: body.folder, fakeFolder} });
    }
  }
}