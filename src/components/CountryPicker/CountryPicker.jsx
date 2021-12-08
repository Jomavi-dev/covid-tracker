import { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      setFetchedCountries(await fetchCountries())
    }
    getCountries()
  }, [setFetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker