# Js Unit Test

---

@title[Agenda]

### Agenda

* Introduction

* How to write unit test

---

@title[Introduction]

### Why test

* 大家都說好、很酷

* 安全感

* 服務更穩定，錯誤率降低

+++

#### 遭遇問題

* 不知道測試該怎麼寫

* 維護麻煩

* 開發時間變長

* 還是有不預期的錯誤發生

+++

#### 測試的漏洞

* 規劃的條件有遺漏

* 第三方套件有問題

* 瀏覽器有問題

* 測試用的資料有限

+++?code=codes/add3.js

##### 規劃漏洞

* num 的型別一定是數字嗎

* num 是否有條件限制


##### 第三方有問題

* 只能相信用到的 framework、plugin、polyfill 正確

* api，也只能相信資料正確

+++

##### 瀏覽器

* 這麼多人用一定不會有問題？


##### 測試的資料有限

* 數字
  * [Number.MAX_SAFE_INTEGER](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type)
  * [Number.MIN_SAFE_INTEGER](https://tc39.github.io/ecma262/#sec-number.min_safe_integer)

* 字串
  * 跳脫字元
  * 保留字？

+++

#### 優點

* 可確保寫過的情境要有某種程度的把握

* 盡可能得提早發現問題

* code review

* doc
  * 測試是流暢的前提下
  * 可以看出功能的各種情境、資料流...

---

@title[About Test]

#### 測試包含

* lint

* unit test

* e2e test

+++

### Structure

![structure](assets/images/structure.png)

+++

#### 工具說明

* framework: jasmine, mocha, qunit...

* constructs: phantomjs, browser deriver (chrome-driver, safari-deriver...), headless...

* tool: jest, karma, chai, zuul, testem...

+++

#### TDD or BDD

* TDD: test driven develope, 由測試驅動開發

* BDD: behavior driven develope, 先開發後測試

+++

![flow](assets/images/flow.png)

+++

#### unit test vs. e2e test

* unit test
  * 白箱測試
  * 完整的測試每個 function
  * terminal

* e2e test
  * 黑箱測試
  * 模擬互動行為
  * user story
  * browser

---

@title[How to write]

### Goal

|            | value | condition  |
|------------|-------|------------|
| toBe       |  F/T  |    F/T     |
| toContain  |  F/T  |    F/T     |


* expect function(value) toBe expected

* expect function(value) not toBe expected

+++

### Flow

* 小 -> 大

* 沒有畫面 -> 有畫面

* 跟事件無關 -> 事件測試

+++

### 寫測試的心態

* 對照的功能寫的測試根本就是渣

* 先功能、後測試
  * 這功能一定哪裡有問題
  * 這條件一定哪裡有錯
  * 各種吹毛求疵就對了

* 先測試、後功能
  * 再想一次、預計的流程是不是對的
  * 想盡辦法、也要把功能寫得跟預計結果一樣

---

@title[Example]

### [todomvc](http://todomvc.com/examples/react/#/) as an example

![example todomvc](assets/images/example1.png)

+++?code=codes/addTodo.js

@title[AddTodo as an example]

@[1-3](action)
@[5-19](component)

+++?code=codes/testAddAct1.js

@title[test AddTodoAction]

@[1-3](action addTodo)
@[6-7](發現不好測試)
@[4](加入 getTodoList)
@[8-9](利用 getTodoList 協助測試)
@[8](輸入的值，一定是有意義的嗎？)

+++?code=codes/testAddAct2.js

@[1-3](經過修正)
@[5-7](原來的測試)
@[8-9](後來新增的測試)

+++?code=codes/testAddComp1.js

@title[test AddTodo]

@[1-18](component AddTodo)
@[20-24](畫面組成測試)
@[25-26](可以用 snapshot 嗎？)
@[28-31](模擬事件，可能要先確定初始狀態，如 submitted ..等)
@[32-35](利用 getTodoList() 輔助)
@[36-39](mock action addTodo)
@[47-50](從源頭 mock onSubmit)
@[41-45](在 mock onSubmit，必須確保 onSubmit 正確)

+++?code=codes/testAddComp2.js

test event 的方案 1, 2, 3 該選哪個？

+++

|   | 優點                 | 缺點                     |
|---|----------------------|--------------------------|
| 1 | 真的很詳細           | 仔細到有點煩             |
| 2 | 不需要在意外來的     | 自身的行為和功能無法脫勾 |
| 3 | 自身的行為和功能脫鉤 | 測試寫起來有點多         |

+++?code=codes/testAddComp3.js

@[1-8](定義 App)
@[10-12](只需要測試是否包含子元件)

---

### How to maintain

* 安插新進測試到合適的位置
  * 不會總是加在最後

* 檢查是否有過時或重複的測試

+++

AddTodo 有新需求處理

* 最多 10 個 todo

* 新增顯示 error 訊息

+++?code=codes/testAddTodo2.js

@[4](加上最多 10 個的條件)
@[16-20](必須補上條件的測試)
@[45-47](加上訊息區塊)
@[61](畫面必須補上訊息顯示的測試)
@[62-64](沒有訊息)
@[65-68](有訊息)
@[29-37](設置並更新訊息的時機)
@[78-84](方案 1，設置真的 todoList)
@[84-90](方案 2，mock getTodoList)
@[94-99](採取 test event 方案 3 ，原來 form onSubmit 的地方不需要修改)
@[92](state.submitted 沒有用到？需要還是不需要？)

+++

#### 維護測試很麻煩

* 每次更新程式都要改測試嗎？不一定

* 依照順序時，維護起來就輕鬆很多

---

### Something Hard

* Key event

* All about browser
  * scroll
  * size, viewport
  * redirect

* Timer
  * timeout, intervel

* Request

+++

#### key event

* 當實作鍵盤的事件，通常代表功能複雜

* 採取 test event 方案 3
  - 單獨對 event function 測試
  - 再模擬事件

+++

#### scroll event, size, viewport

* 不會有完整 dom 屬性或方法

* 採取 test event 方案 3
  - 可能需要先設定一些假資料，如：document.clientHeight...
  - 單獨對 event function 測試

+++?code=codes/testRedirect.js

#### redirect

* 測試不能 redirect

@[1-14](方案 1)
@[15-27](方案 2)

+++

#### Timeout, Intervel

* 一般透過 framework 的 clock mock
  * [jasmine mock timeout function](https://jasmine.github.io/2.0/introduction.html#section-Mocking_the_JavaScript_Timeout_Functions)
  * [jest timer-mock](https://facebook.github.io/jest/docs/en/timer-mocks.html)

+++

#### Request

* 也是透過各種 mock
  * [jasmine ajax mock](https://jasmine.github.io/2.0/ajax.html)
  * [nock - HTTP mocking and expectations library](https://github.com/node-nock/nock)
 
* 原理
  * mock function and response
  * mock request

---

### Ongoing Project

![redux-flow](assets/images/redux-flow.png)
[ref](https://www.slideshare.net/nikgraf/react-redux-introduction)

+++

![flow-example](assets/images/flow-example.png)

* 確保更新資料正確 -> reducer
* 確保操作正確 -> action
* 確保顯示正確 -> component

---

### FIN
