import AWS from "aws-sdk"
import * as uuid from "uuid"

const s3 = new AWS.S3({
  signatureVersion: "v4"
})
