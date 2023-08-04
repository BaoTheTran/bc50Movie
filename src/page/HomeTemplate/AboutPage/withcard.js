import React from 'react'

export default function WithCard(Component) {
    //closure component : 1 hàm return về 1 hàm khác. giúp giữ lại giá trị trước đó.
    return function(){
        return (
            <div className="card ">
            <div className="card-header">
                Header
            </div>
            <div className="card-body">
                <Component/>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
            </div>
          )
    }
}
