import produce from 'immer'

export const dataWithoutPrivateFields = produce((draft: { [key: string]: any }) => {
  Object.keys(draft).forEach((key) => {
    if (key.startsWith('_'))
      delete draft[key]
  })
})
