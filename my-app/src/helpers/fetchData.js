import { useState, useEffect } from 'react'

function useFetch(dataUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [dataUrl])

  return [data, loading]
}

export default useFetch