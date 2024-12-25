Problem:
Write a function to find words in any text that contain both number abd katub characters in the word. After getting the matched words, create the variations of the words by inserting "-" character between the latin character and the number. Please read the input adn Output requirement for clarfication

Input: 

  - 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options'
  
Output: 

  - 'Matched: 132cxvx, mic7979, m98opt'
  
  - 'Variations with '-' character:  132-cxvx, mic-7979, m-98opt, m98-opt'


With matchedWithRegex will be optimized in terms of performance because using regex so the complexity is small O^(n)

As for matchedWithLoop is code while doing because not remembering the regex, so using loop to insert - will increase the complexity to O(n^2)
