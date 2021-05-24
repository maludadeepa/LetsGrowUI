
const DEV_ENV={
    login_url : "http://letsgrow.com:5000/auth/login",
}

const INT_ENV={
    login_url : "",
}

const TEST_ENV={
    login_url : "",
}

const PROD_ENV={
    login_url : "",
}

const getEnvVal = (env="dev") => {
    switch (env) {
        case "dev":
            return DEV_ENV;
        case "int":
            return INT_ENV;
        case "test":
            return TEST_ENV;
        case "prod":
            return PROD_ENV;
        default:
            break;
    }
}

export default getEnvVal;