// Action Creator
export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}
export function deletePerson(key) {
    return{
    type: 'DELETE',
    payload: key
    }
    
}