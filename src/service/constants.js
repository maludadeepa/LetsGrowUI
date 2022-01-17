
const getEnvVal = () => {

    // eslint-disable-next-line no-undef
    switch (process.env.NODE_ENV) {
        case "development":
            return {
                login_url : "http://essayandobservation.com:5000/auth/login",
                api_url : "http://essayandobservation.com.com:5000",
            }
        case "test":
            return {
                login_url : "http://essayandobservation.com.com:5000/auth/login",
            };
        case "production":
            return {
                login_url : "http://essayandobservation.com/auth/login",
                api_url : "http://api.essayandobservation.com",
            };
        default:
            break;
    }
}

export default getEnvVal;