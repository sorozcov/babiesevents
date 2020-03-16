//Local storage para que el estado persista

//cargar estado
export const loadState = () =>{
    try{
        const localStorageState = localStorage.getItem('state');
        if(localStorageState === null){
            return undefined;
        }
        return JSON.parse(localStorageState);
    } catch(error){
        return undefined;
    }
}

//guardar estado
export const saveState = (state) =>{
    try{
        const localStorageState = JSON.stringify(state);
        localStorage.setItem('state',localStorageState)
    } catch(error){
        return undefined;
    }
}

//clear al estado
export const clearState = () =>{
    try{
        localStorage.setItem('state',null)
    } catch(error){
        return undefined;
    }
}