export const makeName = (person, options = { first: true, middle: true, last: true }) => {
    const { first, middle, last } = options;
    const name = `${first ? person.firstName : ''} ${middle ? person.middleName : ''} ${last ? person.lastName : ''}`
    return name;
}