# Section 3
## Event System
Rules for using Events:
- Decide what event you want to watch for.
- Create a function usually called event-handler or callback function
- name the function as, on/handle+EventName (i.e. handleClink or onCLick) 
- pass the function as a prop
 
**Difference b/w func & func()**
func() is actually calling the function func.
func is the reference to function func.

**Important points:**
- Why useState() uses array destructuring, because of the conveneince of developer. 
- Avoid modifying state Variable directly.
