/** Can you explain about Interface and Enum, and where will you be using, please make some examples. **/
interface User {
  firstName: string
  lastName: string
  customerID: string
  note: string
  profession: ProfessionType
}

enum ProfessionType {
  Student = "student",
  Freelancer = "freelancer",
  ProductOwner = "productOwner",
  Engineer = "engineer",
  SystemAnalytics = "systemAnalytics",
}
// 1. Interface is used to define a shape of object and ensure it is in well-structured, type-safe and expandible, basically I used `interface` to define objects and using `type` to define primitive and function. 

// 2. Enums are used to create a collection of related values that can be used as constants, but I don't quite using it due to it might cause some problems.
// enum increase size of compiled output cause it generates additional code.
// It's complex than usual constant so it might slow application down.
// String enum is an name type, make it not intuitive.
const user1: User = {
  firstName: "John",
  lastName: "Doe",
  customerID: "123456789",
  note: "Has a pending order.",
  profession: 'freelancer' // error
}
const user2: User = {
  firstName: "John",
  lastName: "Doe",
  customerID: "123456789",
  note: "Has a pending order.",
  profession: ProfessionType.Freelancer, // pass
}
// I always using simple const instead and infer its type
const professionConst = ["student" , "freelancer" , "productOwner" , "engineer" , "systemAnalytics"] as const
type ProfessionConst = (typeof professionConst)[number]