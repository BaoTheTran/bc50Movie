import React, {memo} from 'react'

//memo không trong bộ HOOKS của react.chỉ giúp khép comp
function Child() {
    console.log("Child");
  return (
    <div>
        <h4>Child</h4>
    </div>
  )
}


//memo giống pureChild , chỉ chạy 1 lần duy nhất, khi comp cha chạy thì child ko chạy lại

//tuy nhiên, do nhận props từ comp cha nên vô tác dụng
export default memo (Child);
