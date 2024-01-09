function nextPalindrome(num) {
  //your JS code here.
	num = parseInt(num);

	num++;

	while(true)
		{
			let strNum = num.toString();

			let i = 0;
			let j = strNum.length - 1;
			let isPallindrome = true;

			while(i<j)
				{
					if(strNum[i] !== strNum[j])
					{
						isPallindrome = false;
						break;
					}

					i++;
					j--;
				}

			if(isPallindrome)
			{
				return num;
			}
			else{
				num++;
			}
			
		}
	
 
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
