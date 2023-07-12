import { SpotBox } from './SpotBox'
import spotsJson from '@/json/spots.json'
import { Grid } from '@@/styled-system/jsx'

export const SpotList = () => {
  return (
    <Grid gridTemplateColumns={'repeat(3, 1fr)'} gap={8}>
      {spotsJson.map((i) => {
        return <SpotBox key={i.id} spot={i}></SpotBox>
      })}
    </Grid>
  )
}
