import * as ACTION from "../enums/action.js"

const returnMoney = (item) => {
	return { type: ACTION.RETURN_MONEY, payload: item }
}

export { returnMoney };