export function saveToLocalStorage(uid, data){
    try{
       const dataString = JSON.stringify(data)
       localStorage.setItem(uid, dataString)
    }catch(error){
        console.error(`Error guardando los datos de localStorage con clave "${uid}":`, error)
        return null
    }
}

export function loadFromLocalStorage(uid) {
    try {
        const dataString = localStorage.getItem(uid);
        if (dataString) {
            return JSON.parse(dataString);
        } else {
            return null;
        }
    } catch (error) {
        console.error(`Error: no hay datos de: "${uid}":`, error);
        return null;
    }
}

export function clearProgressFromLocal(uid){
    if(!uid) return;

    localStorage.removeItem(uid); 
}