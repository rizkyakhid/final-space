import { useState, useEffect } from 'react'

function useFetch(dataUrl) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(dataUrl, {
      method: 'get'
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return [data]
}

export default useFetch