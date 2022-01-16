
const getEnvVal = () => {

    // eslint-disable-next-line no-undef
    switch (process.env.NODE_ENV) {
        case "development":
            return {
                login_url : "http://da-papers.com:5000/auth/login",
                api_url : "http://da-papers.com:5000",
            }
        case "test":
            return {
                login_url : "http://da-papers.com:5000/auth/login",
            };
        case "production":
            return {
                login_url : "http://kiribul/auth/login",
                api_url : "http://api.kiribul.com",
            };
        default:
            break;
    }
}

export default getEnvVal;