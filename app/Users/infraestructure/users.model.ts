import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    userId: String,
    username: String,
    operator: {
      type: Schema.Types.ObjectId,
      ref: 'Operator',
      index: true,
    },
    operatorUuid: String,
    currency: {
      type: Schema.Types.ObjectId,
      ref: 'Currency',
      index: true,
    },
    lastBalance: Number,
    status: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
    isPhysic: { type: Boolean, default: false },
    board: { type: Boolean, default: false },
    tokenWallet: String,
    WL: String,
  },
  { timestamps: true }
)

export default model('User', userSchema)
