package java231027;

import java.util.ArrayList;

public class T2 {
    void solution() {
        int[] arr = {3, 2, 5, 7, 11};
        int target = 9;
        ArrayList<Integer> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            for(int j = 0; j < arr.length; j++) {
                if(i == j) {
                    continue;
                }
                else if(i < j) {
                    continue;
                }
                else {
                    if(arr[i] + arr[j] == target) {
                        result.add(j);
                        result.add(i);
                        System.out.println(arr[i] + ", " + arr[j]);

                        System.out.println(result);
                        return;
                    }
                }
            }
        }

    }

}
