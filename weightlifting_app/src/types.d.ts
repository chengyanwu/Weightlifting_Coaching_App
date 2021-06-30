type Point = {
  x: number,
  y: number
}

type Keypoint = {
  "position": {
    "y": number,
    "x": number
  },
  "part": string,
  "score": number
}
type GroupedPoints = {
  part: string,
  leftPoint: Keypoint,
  rightPoint: Keypoint
}

type Limb = {
  name: string,
  joints: string[],
  side?: 'left' | 'right'
}