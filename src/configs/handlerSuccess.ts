import { Response } from 'express'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const returnSuccess = (
  res: Response,
  data: any,
  success = 'server success'
) => {
  return res.status(200).json({ success: true, message: `${success}`, data })
}
