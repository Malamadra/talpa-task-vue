import data from './data'

export const machines = data.machines.map(({ sensors, ...rest }) => ({
  ...rest
}))

export const getSingleMachine = id =>
  data.machines.find(machine => machine.id === id)
