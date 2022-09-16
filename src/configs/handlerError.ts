import { Response } from 'express'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const returnErrFromServer = (res: Response, err: any) => {
  return res
    .status(500)
    .json({ success: false, message: `Server error: ${err}` })
}
