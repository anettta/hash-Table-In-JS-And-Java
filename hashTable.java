import java.util.Arrays;

public class HashFunction {
    String[] theArray;
    int arraySize;
    int itemsInArray = 0;

    public static void main(String[] args) {
        HashFunction theFunc = new HashFunction(30);
        String[] elementsToAdd = {"1", "5", "17", "21", "26" };
        String[] elementsToAdd2 = {"100", "510", "170" };

        theFunc.hashFunction1(elementsToAdd, theFunc.theArray);
        theFunc.hashFunction2(elementsToAdd2, theFunc.theArray);
        theFunc.findKey("660");
        theFunc.displayTheStack();


    }

    public void hashFunction1(String[] stringsForArray, String[] theArray) {
        for(int n=0; n < stringsForArray.length; n++){
            String newElementVal = stringForArray[n];
            theArray[Integer.parseInt(newElementVal)] = newElementVal;
        }
    }

      public void hashFunction2(String[] stringsForArray, String[] theArray) {
        for(int n=0; n < stringsForArray.length; n++){
            String newElementVal = stringForArray[n];
            int arrayIndex = Integer.parseInt(newElementVal)%29;
            System.out.println("Modulus Index=" + arrayIndex + " for value " + newElementVal);
            while (theArray[arrayIndex != "-1"]) {
                ++arrayIndex;
                System.out.println("Collision Try " + arrayIndex + " Instead");
                arrayIndex %= arraySize;

            }
            theArray[arrayIndex] = newElementVal;

        }
    }

    public String findKey(String key) {
        int arrayIndexHash = Integer.parseInt(key) % 29;
        while(theArray[arrayIndexHash] != "-1") {
            if(theArray[arrayIndexHash] == key) {
                System.out.println(key + "was found in index" + arrayIndexHash);
                return theArray[arrayIndexHash];

            }
            ++arrayIndexHash;
            arrayIndexHash %= arraySize;
        }
        return null;
    }

    HashFunction(int size) {
        arraySize = size;
        theArray = new String[size];
        Arrays.fill(theArray, "-1");
    }

    public void displayTheStack() {
        int increment = 0;
        for(int m = 0; m < 3; m++){
            increment += 10;

             for (int n = 0; n < 71; n++)

                System.out.print("-");
               System.out.println();

            for (int n = increment - 10; n < increment; n++) {

                System.out.format("| %3s " + " ", n);
            }

            System.out.println("|");

            for (int n = 0; n < 71; n++)

                System.out.print("-");

            System.out.println();

            for (int n = increment - 10; n < increment; n++) {


                if (theArray[n].equals("-1"))

                    System.out.print("|      ");
                else

                    System.out.print(String.format("| %3s " + " ", theArray[n]));
            }


            System.out.println("|");

            for (int n = 0; n < 71; n++)

                System.out.print("-");

 

            System.out.println();

        }
    }
}