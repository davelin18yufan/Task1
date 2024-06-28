const user = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "123456789",
    note: "Has a pending order.",
    profession: "freelancer",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    customerID: "987654321",
    note: "Good customer with multiple orders",
    profession: "student",
  },
  {
    firstName: "Peter",
    lastName: "Jones",
    customerID: "1111222233",
    note: "A celebrity",
    profession: "productOwner",
  },
  {
    firstName: "Mary",
    lastName: "Brown",
    customerID: "4444555566",
    note: "Psyco",
    profession: "engineer",
  },
  {
    firstName: "David",
    lastName: "Williams",
    customerID: "7777888899",
    note: "A Dad with 2 kids",
    profession: "systemAnalytics",
  },
]
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
/**
 * Profession enum.
 * @typedef {'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics'} Profession
 */
/**
 * Sorts an array of user objects by the combined string of their first name, last name, and customer ID.
 *
 * @param {Array<{ firstName: string, lastName: string, customerID: string, note: string, profession: Profession }>} user - Array of user objects.
 * @returns {Array<{ firstName: string, lastName: string, customerID: string, note: string, profession: Profession }>} Sorted array of user objects.
 */
function sortUserName(user) {
  return user.sort((a, b) => {
    const ctxA = a.firstName + a.lastName + a.customerID
    const ctxB = b.firstName + b.lastName + b.customerID
    return ctxA.localeCompare(ctxB)
  })
}

console.log(sortUserName(user))

/**
Q2. Please sort by ‘profession’ to follow the principle. (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
/**
 * Sorts an array of user objects by ‘profession’ to follow the principle. (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’).
 * @param {({ firstName: string, lastName: string, customerID: string, note: string, profession: Profession })[]} user - Array of user Object.
 */
function sortByType(user) {
  return user.sort((a, b) => {
    // set an number rank for principle
    const ranks = {
      systemAnalytics: 5,
      engineer: 4,
      productOwner: 3,
      freelancer: 2,
      student: 1,
    }
    // desc
    return ranks[b.profession] - ranks[a.profession]
  })
}

console.log(sortByType(user))

