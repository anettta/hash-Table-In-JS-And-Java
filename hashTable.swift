import UIKit

var sampleString = "1337"

func convert(string: String) -> {
   var total = 0
   // 1337 = 1 * 10^3 + 3 * 10^2 + 3 *  10^1 + 7 * 10^0

let valueMap = [
    "1" as Character: 1,
    "3": 3,
    "7": 7,

]

   for (i,c ) in string.enumerated() {
       let exponent = string.count - i - 1
       if let value = valueMap[c] {
           let num = Decimal(value) * pow(10, exponent)
           total = NSDecimalNumber(decimal: num).intValue

       }
    
   }

   return total
}


 //return Int(string) ?? 0  solve this problem
    // without String to Int conversion code