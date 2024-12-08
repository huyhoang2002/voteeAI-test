const Ok = (data) => {
    return {
        status: true,
        message: "request completed",
        data
    }
}

const BadRequest = () => {
    return {
        status: false,
        message: "Internal Server Error"
    }
}

const InvalidValidate = () => {
    return {
        status: false,
        message: "Request return status 422"
    }
}

module.exports = {
    Ok,
    BadRequest,
    InvalidValidate
}
