When increasing number of senders the delay for the first successful transmission increases substantially. 
When increasing the number of allowed backoff, the delay for first successful trasmission decreases substantially.

Time goes doesn from k=2 to k=3 because the probability that there is a collision at k=3 is less likely as there is an additional
sender. There are more combinations of delays with 3 senders than 2.

I tested the program with smaller values of k where it is more predictable. I also checked with the values
given in the assignment to make sure the values are inside 3% more or less.

I know run_trial is correct as the values are similiar to the graph given in the assignment.

I determined sample_size through trial and error making sure that the coefficient of variation was
mostly under ~1%. Initially starting at 1000, and finally ending at 5000 where the value stayed moslty under 1%

I used very little AI but I did use it to better understand the assignment because I did get confused reading it, and had trouble 
finding where to start.