// COnstants
import { GET_FOLDERS, CREATE_FOLDER } from "../constants/folderActionTypes";

// Service
import FolderService from "../services/folders";
const foldersService = new FolderService();

export const getFolders = () => {
  return async dispatch => {
    const response = await foldersService.getFolders();
    dispatch({ type: GET_FOLDERS, payload: response.body.folders });
  }
}

export const createFolder = title => {
  return async dispatch => {
    const response = await foldersService.createFolder(title);
    if (!response.isError) {
      dispatch({ type: CREATE_FOLDER, payload: response.body.folders })
    }
  }
}