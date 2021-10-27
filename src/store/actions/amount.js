import { INC_AMOUNT, DEC_AMOUNT } from "../action-types"

export const IncreaseAmount = (amount) => ({
    type: INC_AMOUNT,
    amount
})

export const DecreaseAmount = (amount) => ({
    type: DEC_AMOUNT,
    amount
})

export const Increase = (amount) => {
    return disptach => {
        disptach(IncreaseAmount(amount))
    }
}

export const Decrease = (amount) => {
    return disptach => {
        return disptach(DecreaseAmount(amount))
    }
}