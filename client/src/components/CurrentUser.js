import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getProfileThunk } from "../thunks/userThunks.js";



const CurrentUser = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileThunk())
  }, [])
  return children;
}


export default CurrentUser;