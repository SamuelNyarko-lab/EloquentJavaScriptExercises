/* Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######

 */

//My Solution
for (let i = 1; i < 8; i++) {
  console.log(`#`.repeat(i));
}

/* Solution I Learnt

for (let line = "#"; line.length < 8; line += "#")
  console.log(line); */
