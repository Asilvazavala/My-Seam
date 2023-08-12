import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

export const useFunctions = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return { 
    dispatch, 
    id, 
    goTop, 
    NavLink,
    useNavigate,
    useSelector,
    axios,
  } 
}
