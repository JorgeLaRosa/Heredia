
import db from '../firebase'

const itemCollection = db.collection('productos')

export function getProducts() {
    return itemCollection
        .get()
        .then(snapshots => {
            return snapshots.docs.map(doc => doc.data())
        })
}

export function getProductsById(id) {
    console.log("El valor que llega de params")
    console.log(id)
    return itemCollection.where("productId", "==", parseInt(id))
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })

}

