import axios from "axios";

export const searchMeals = async(q,key) => {
  try {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${q}=${key}`)
    .then(response => response.json())
    .then(json => json.meals)
  } catch (err) {
    console.log(err.message)
  }
  // return response = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
}

export const getRandomItem = async() => {
  try {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => json.meals)
  } catch (err) {
    console.error(err.message)
  }
  // return response = axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
}

export const getMealById = async(idMeals) => {
  try {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`)
    .then(response => response.json())
    .then(json => json.meals)
  } catch (err) {
    console.log(err.message)
  }
  // return response = axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`)
}

export const filterMeals = async(q, key) => {
  try {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${q}=${key}`)
    .then(response => response.json())
    .then(json => json.meals)
  } catch (err) {
    console.error(err.message)
  }
  // return response = axios.get(`www.themealdb.com/api/json/v1/1/filter.php?${q}=${key}`)
}

export const getList = async(q) => {
  try {
    return fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${q}=list`)
    .then(response => response.json())
    .then(json => json.meals)
  } catch (err) {
    console.log(err.message)
  }
  // return response = axios.get(`www.themealdb.com/api/json/v1/1/list.php?${q}=list`)
}

export const getCategories = async() => {
  try {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(json => json.meals)
  } catch (error) {
    console.error(error.message)
  }
  // return response = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
}