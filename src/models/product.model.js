export const P_COLLECTION = "products"; 

export const cleanProduct = (productData) => { 
    return {

        id: productData.id || "",
        Nombre: productData.Nombre || "",
        precio: typeof productData.precio === "number" ? productData.precio : 0

    }
}