## Functional Programming vs Sequence Programming

#### <span class="speaker">ichi</span>

---
@title[Question - 1]

* 測試的目的？
* 正確性的依據是什麼？

+++?code=codes/division.js

+++
@title[Introduction - 1]

* 測試其實是抽樣檢查
  * 建立檢查需要的環境

+++

### what problem - functional language (1)

Proof:

<div class="proof">

Suppose it is true that there is a problem which be solved only by functional language <br>

If a problem is solved only by functional language $\rightarrow$ there is no language to solve it.<br>

$\forall$ functional language $\in$  interpreted $\exists$ a interpreter to handle<br>

$\forall$ interpreter generates a machine language to run<br>

$\therefore \not\exists$ a problem could be solved only by functional language

</div>

+++

### what problem - functional language (2)

* data type (as a set)
  * number, string, boolean
  * function
* syntax
  * operator: $\+\-\times\div\&\|\!\%$ ...
  * condition
  * loop
  * function

+++?image=assets/images/graph.png&size=auto 80%&position=bottom

### what problem - functional programming

---
@title[Introduction - 3]

### Performance

* language: compiled vs interpreted
* [programming](#/2/3)

---
@title[Why]

### why should we choose it

Performance is not only the reason

* familiar with it
* in the specific environment
* easy to solve problems we meet
* popular

---
@title[Difference - 1]

### create todoList as an example

* item.description.length > 0
* item.description.length <= 20
* uncomplete items.length <= 10

+++?image=assets/images/add-todo-flowchart.png&size=auto 85%&position=bottom

### Sequence Programming

+++?image=assets/images/functional-chart.png&size=auto 85%&position=bottom

### Functional Programming

---
@title[Difference - 2]

### Expression Tree

@snap[west sidebar]
![formula-tree-1](assets/images/formula-tree-1.png)
@snapend

@snap[east sidebar]
  <h4>Tree Traversal</h4>
  @ul
    * infix: <pre>1 + 1</pre>
    * prefix: <pre>+ 1 1</pre>
    * postfix: <pre>1 1 +</pre>
  @ulend
@snapend

+++

@snap[west sidebar]
![formula-tree-2](assets/images/formula-tree-2.png)
@snapend

@snap[east sidebar]
  <h4>Tree Traversal</h4>
  @ul
    * infix: <pre>3 \* (1 + 2) / 4 + 5</pre>
    * prefix: <pre>+ / \* 3 + 1 2 4 5</pre>
  @ulend
@snapend

---

### FIN
