import Development from "./dev";
import Production from "./production";

const getEnv= (_env)=>{
    if(_env){
        return _env;
    }

    return "development";
};

const env = process.env.NODE_ENV;

const config = {
    development:{
        ...Development,
    },

    productiom:{
        ...Production,
    },
};

export default config[getEnv(env)];