# Counterarguments to Current Metrics
1. length of lines, files, identifiers, etc.
2. number of identifiers, keywords, and other tokens
3. number of independent paths through the code
4. number of nested conditionals/loops/calls
5. mixtures of all of the above

## Counterarguments to Measures 1-2
If we interpret these metrics straight-forwardly, a clear counterexample would be minified JavaScript, something that is very concise but uncomprehendable.

If we interpret these metrics in a more sophisticated manner, (agnostic to whitespace, comments, and any non-essential language features), then these metrics penalize abstraction (if the abstraction isnt used frequently in the codebase), due to the boilerplate code required for creating functions, types, and classes.

## Counterarguments to Measures 3-4
Intuitively, these metrics do measure some aspect of cognitive complexity. The more nodes and edges the computation graph has, the more complex it is, by definition of "complexity".

The problem with these metrics is that measuring complexity is often useless. For example, some problems require complex algorithms. In other words, frequently, complexity is often inescapable.

## Conclusion
Each of these metrics identified an obstacle to comprehending code quickly, and then defined a metric in terms of that obstacle. However, they did not consider whether such obstacles were necessarily causal of incomprehensible code or were inescapable (required by the problem itself).

Identifying the correct obstacles requires first identifying the processes of cognition when reading code.



# Prerequisite information
This is a well-formed expression in the language of first-order logic:
∀x∃y (P(x,y) ∧ Q(y) → R(x))
The following are subexpressions: ∀x, ∃y, (P(x,y) ∧ Q(y) → R(x))
The last subexpression can be broken down into 3 subsubexpressions: P(x,y), Q(y), and R(x).
What is P(x,y) or Q(y) or R(x)? They are identifiers that are included in the context of this well-formed expression. Namely, we will not consider the  "unfolding" or "reduction" of identifiers as subexpressions, rather, just part of some context.



# Cognitive Analysis
Note, the following analysis will be applicable to more than just programming languages. Namely, it will be applicable to all formal calculi that support user-defined constructions (i.e. types, functions, classes, etc.). 

## Identifying the Processes of Cognition
1. Assuming fluency of the formal calculus's grammar, the first cognitive process that occurs is recognizing a particular well-formed expression and  directing our attention to the well-formed expression in order to "decipher" it. Although the act of recognizing well-formed expressions is something that can be optimized, it is too language-specific and thus outside the scope of this analysis. This recognition process is entirely visual and depends upon the visual features of the language's symbols (symbol size, symbol placement, symbol color, whitespace, etc.).
2. The second cognitive process involves iterating over the subexpressions of the well-formed expression, and "recalling" the cognitive unit that corresponds to each subexpression.
3. The third cognitive process (assuming fluency with each subexpression) involves composing the cognitive units of the subexpression in order to build (or find) the cognitive unit that represents the given well-formed expression. 

The first step "recognition", as previously mentioned, is not in the scope of this analysis.

The second step "iteratively recalling" is where the heart of this analysis will lie, as the relevant principles from cognitive psychology are most agreed upon and obvious here, namely "chunking", "working memory", and  "attention". It will also be evident that the "obstacles" found here are very easy to identify and measure.

The third step "committing" (committing to one's conceptual schema) involves the most uncertain principles from cognitive pyschology. Additionally, these obstacles, while possible to identify, or near-impossible to measure accurately. Thus, this is considered further work, and will only be lightly touched upon.

## Defining Comprehensibility
So, what do I want to measure? I want to measure a well-formed expression's ability to be "committed" to one's conceptual schema...from start "recognition" to finish "committing". However, for the sake of generality and feasibility, I will only focus on one aspect of comprehensibility: "iterative recalling".

In order to measure the "comprehensibility" of an entire codebase, one would apply a comprehensibility metric to every well-formed expression in the codebase, and then take the average. Although, in practice, one is often only concerned with certain parts of the codebase, not all of it at once.

## Identifying the Obstacles to Iterative Recalling
Any well-formed expression, unless atomic, will contain subexpressions. Each subexpression is a collection of symbols from the language's alphabet, as well as user-defined construction (e.g. functions, types, inductive types, classes, etc.). Keep in mind, the reader must hold in working memory, the cognitive unit of every subexpression in order to move onto the "committing " phase. Here, we encounter two cognitive obstacles: the limit of working memory and the limit of attention. 

Working memory can only deal with so many "chunks" or "cognitive units" at a time. To be clear, in this scenario, the thing being "held" in memory is the cognitive unit corresponding to a subexpression. Although much work has been done to estimate this limit in pyschology, the most currently agreed upon range is 4 ± 1. Thus, we have already encountered our first obstacle: the number of subexpressions in a given well-formed expression.

Similarly, it has largely been observed that attention is limited to a single object at a time. Thus, when we encounter a subexpression that depends on a subsubexpression, our attention will switch to dealing with iteratively recalling the subsubexpressions, thus losing track of other subexpressions. This is the second obstacle: nested subexpressions.

Both of these obstacles aren't inherently insurmountable. Rather, as the number of subexpressions increases, and the number of nested subexpressions increases, fewer and fewer people will be able to hold everything in their working memory.

Note, it is assumed that the reader is fluent in all subexpressions or subsub (whatever the "bottom" is) of a given well-formed expression. Of course, optimizing achieving this fluency is a different research problem. Namely, the order in which to approach learning a codebase. 

## Identifying the Obstacles to Committing
How does one process multiple cognitive units into a new cognitive unit (or map the composition to an old one if already committed before)? Although I have ideas, I will postpone this discussion for now.


# Notes on Other Cognitive Properties, Beyond Complexity and Comprehensibility
The comprehensibility metric fails to measure an important property of code, one that common complexity metrics will likely measure better: cognitive bloat. 

While comprehensibility only depends upon a given well-formed expression, and remains agnostic to the purpose of the expression, cognitive bloat absolutely depends upon the purpose of the expression. Namely, cognitive bloat is the amount of redundant or irrelevant information in the well-formed expression, with respect to the purpose of the expression. 

I think cognitive bloat is another important metric to measure, and similarly, I don't believe complexity metrics accurately isolate and measure this property.

# Relevant Research
I was unable to find any research that adopts a similar approach or has a similar outcome/hypothesis to the one proposed here.

# Research Proposals
I see many possible relevant avenues to research, each of them viable. However, I am not sure which are noteworthy enough, nor which ones are considered too informal.

1. Building a taxonomy of cognitive processes related to the reading of code, and thus defining a taxonomy of cognitive properties related to code (or more broadly, any formal calculus).
2. Choosing one particular cognitive property, likely comprehensibility, and then building a proof of concept (a linter) that measures it. Then either demonstrating the usefulness of the metric via user studies, or by showing a correlation with other desirable properties (low num of bugs, etc.).
3. Building a taxonomy of cognitive processes related to the reading of code, and catalogue a list of cognitive obstacles, and then show how this list can be used to describe every relevant "rule-of-thumb" when it comes to software engineering best practices.
4. A mixture of the above.


# Appendix

## Example

The following will be a demonstration of an early version of the metric, as well as a demonstration of the cognitive processes involved.

The code below represents a simple implementation of the Sudoku solver.

```python
def solve(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                for num in range(1, 10):
                    if all(board[i][x] != num for x in range(9)) \
                       and all(board[y][j] != num for y in range(9)) \
                       and all(board[i//3*3 + y][j//3*3 + x] != num for y in range(3) for x in range(3)):
                        board[i][j] = num
                        if solve(board):
                            return True
                        board[i][j] = 0
                return False
    return True
```

expression breakdown:
solve has 3 subexpressions: def, board, and "for i in range(9)".
"for i in range(9)" has 3 subexpressions: "for _ in", "range(9)", and "for j in range(9)" (again). 
etc. 

calculation:
I will remain agnostic to now as to how the particular metric is calculated. There are a few different ways, each with their own implications that would punish some behavior more than others. For now, I will simply present a few options.

Form a tree of subexpressions. Note, NOT a tree of computations, but of syntactic expressions, and not an AST (we dont care about symbols, just expressions).

The measure of any node is the sum of each of its children's measures. Leaf nodes have a measure of 1.

Of course, we can play around with this a bit more. Lower levels in the tree can be made to be penalized more heavily (due to exponentially adding to working memory). Or, any weight under 5 can be made to be 0, thus not distinguishing between 1, 2, 3, or 4 subexpressions. Also, subexpressions in the body can be penalized differently than subexpressions in the parameter list.

## Misc. Notes
1. There are cases when multiple subexpressions can automatically be grouped as one cognitive unit automatically, without the need for the writer to denote them as such (via a custom type/class, or let-definition).
