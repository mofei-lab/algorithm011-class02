# 学习笔记

## 递归

```
  public void recur(int level, int param) {
     terminator
     if (level > MAX_LEVEL) {
        // process result
        return;
     }
            
     // process current logic
     process(level, param);
     
     // drill down
     recur(level + 1, newParam);
     restore current status
  }
```

## 分治

```
   public void recur(Problem problem) {
     //terminator
     if (problem == null) {
     //print result
        return;
     }

     //prepare data
     data = prepareData(problem);
     Array[] subProblems = splitProblem(problem, data);
     //conquer subProblems
     subResult1 = self.divideConquer(subProblems[0], p1, ...)
     subResult2 = self.divideConquer(subProblems[1], p1, ...)
     subResult3 = self.divideConquer(subProblems[2], p1, ...)

     //process and generate the final result
     result = processResult(subResult1, subResult2, subResult3, …);

     //revert the current level states
     }
```

## 回溯

```
   List<String> result =new ArrayList<>();

   public void backTrack(path,choiceList){
       //满足结束条件
       if (condition){
           result.add(path);
           return; 
       }

       for( Choice choice:choiceList){
           //做选择
           backtrack(path, choiceList);
           //撤销选择
       } 
   }
```