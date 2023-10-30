package java231027;

public class T3 {
    void solution() {
        int[] nums = {3, 4, 5, 6, 7, 8, 0, 1, 2};
        int target = 0;
        boolean flag = false;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == target) {
                System.out.println(i);
                flag = true;
            }
        }
        if(!flag) {
            System.out.println("-1");
        }
    }
}
