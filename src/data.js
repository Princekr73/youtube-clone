export const API_KEY = `AIzaSyA58-96w-ndVGpN7k3CeKFmjxxOwiJvQR0`;

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}