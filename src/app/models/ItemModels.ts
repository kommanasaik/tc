
interface StatesDatabase {
  id: number
  statename: string
  datecreated: string
}
interface WeightDatabase {
  id: number
  weight: string
  created: string
}
interface DistrictDatabase {
  id: number
  stateid: number
  distname: string
  datecreated: string
}
interface CostDatabase {
  id: number
  weightid: number
  amount: string
  created: string
}

interface CityDatabase {
  id: number
  stateid: number
  distid: number
  mandalename: string
  datecreated: string
}

interface UserDatabase {
  id:any 
  itemid:any
  type: any
  itemtype: any
  packing: any
  weight: any
  amount: any
  description: any
  email: any
  mobile: any
  fromstate: any
  tostate: any
  fromdist: any
  todist: any
  fromcity: any
  tocity: any
  fromarea: any
  toarea: any
  dateoftravel: any
  timeoftravel: any
  role: any
  datecreated: any
  status: any
}