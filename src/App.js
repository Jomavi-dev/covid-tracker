import { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData)
    }
    getData()
  }, [])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    setData(fetchedData)
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Covid-19 Tracker</h1>
      <Cards {...data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart {...data} country={country} />
    </div>
  )
}

export default App;
