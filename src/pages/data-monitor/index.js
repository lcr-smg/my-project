import React,{Component} from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

class Menu extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }

    render(){
        return(
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="菜单管理" />
                <h2>数据监控...</h2>
            </div>
        )
    }
}
export default Menu;