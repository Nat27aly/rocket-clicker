export function loadFromLocalStorage(key) {
    try {
        // getItem - devuelve el valor de key
        const storedData = localStorage.getItem(key)
        if (!storedData) {
            return null
        }
        return JSON.parse(storedData)
    }catch(error){
        console.error(`Error cargando datos de localStorage con clave "${key}":`, error)
        return null
    }
}

export function saveToLocalStorage(key, data){
    try{
       const dataString = JSON.stringify(data)
       localStorage.setItem(key, dataString)
    }catch(error){
        console.error(`Error guardando los datos de localStorage con clave "${key}":`, error)
        return null
    }
}