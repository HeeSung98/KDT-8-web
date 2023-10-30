package java231027;

public class T5 {
    void solution() {
        String str1 = "zfabcxqabcafabcdeqwe";
        String str2 = "zdzfabcxqabcdewqetn";
        String tmp = "";
        String result = "";

        int start1 = 0;
        int start2 = 0;
        while (true) {
            if(str1.charAt(start1) != str2.charAt(start2)) {
                start2++;
            }
            else if(str1.charAt(start1) == str2.charAt(start2)){
                if(start1 != 0 && start2 != 0 && str1.charAt(start1 - 1) == str2.charAt(start2 - 1)) {
                    if(start1 == 1) {
                        tmp = tmp + str1.charAt(0);
                    }
                    if(start2 == 1) {
                        tmp = tmp + str2.charAt(0);
                    }
                    tmp = tmp + str1.charAt(start1);
                    System.out.println(start1 + ", " + start2 + " now tmp: " + tmp);
                }
                start1++;
                start2++;
            }

            if (start2 == str2.length()) {
                if(tmp.length() >= result.length()) {
                    result = tmp;
                }
                tmp = "";
                start2 = start1;
                start1++;
            }

            if (start1 == str1.length()) {
                break;
            }
        }
        System.out.println(result);
    }
}
