import data from './data'

export const machines = data.machines.map(({ sensors, ...rest }) => ({
  ...rest
}))
