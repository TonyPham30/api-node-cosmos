import { Response } from 'express'
import { Types } from 'mongoose'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const returnSuccess = (
  res: Response,
  data: unknown,
  success = 'server success'
) => {
  // eslint-disable-next-line sort-keys
  return res.status(200).json({ success: true, data, message: `${success}` })
}
