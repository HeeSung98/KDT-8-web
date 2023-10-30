package java231027;

import java.util.ArrayList;

public class T1 {
    void solution () {
        int[] nums1 = {2, 5, 8, 3, 7};
        int result = 0;

        for(int num : nums1) {
            if(num < 5) {
                result += num;
            }
        }

        System.out.println(result);

    }
}
