import db from '../firebase'

const itemCollection = db.collection('productos')
const orderCollection = db.collection('orders')

export function getProducts() {
    return itemCollection
        .get()
        .then(snapshots => {
            return snapshots.docs.map(doc => doc.data())
        })
}

export function getProductsById(id) {

    return itemCollection.where("productId", "==", parseInt(id))
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })

}

export function getProductsByCategory(category) {
    return itemCollection.where("category", "==", category)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
}

export function createOrder(newOrder) {

    return (
        orderCollection
            .add(newOrder)
            .then(function (i) {
                return (i.id)
            })

    )
    //     .catch(function (error) {
    //         console.log("ERROR con tocket", error)
    //     })
}




