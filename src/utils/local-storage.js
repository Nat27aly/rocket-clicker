export function saveToLocalStorage(uid, data){
    try{
       const dataString = JSON.stringify(data)
       localStorage.setItem(uid, dataString)
    }catch(error){
        console.error(`Error guardando los datos de localStorage con clave "${uid}":`, error)
        return null
    }
}