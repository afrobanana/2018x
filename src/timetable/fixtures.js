export const STAGE1 = {
  name: 'ABR Square',
  displayOrder: 0,
}
export const STAGE2 = {
  name: 'In the woods',
  displayOrder: 1,
}
export const STAGE3 = {
  name: "Kid's Corner",
  type: 'activity',
  displayOrder: 2,
}

export default [
  {
    id: 'ABR RADIO',
    date: new Date('07/20/2018 23:00'),
    stage: STAGE1,
  },
  {
    id: 'sample-artist',
    date: new Date('07/21/2018 04:30'),
    stage: STAGE2,
  },
  {
    id: 'sample-activity',
    date: new Date('07/22/2018 18:00'),
    stage: STAGE3,
  },
]